import Place from '../models/place.model.js';
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
  // if (!req.user.isAdmin) {
  //   return next(errorHandler(403, 'You are not allowed to create a post'));
  // }
  console.log(req.body)
  const slug = req.body.name
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newPlace = new Place({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedPlace = await newPlace.save();
    res.status(201).json(savedPlace);
  } catch (error) {
    next(error);
  }
};

export const getplaces = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const places = await Place.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.tourtype && { tourtype: req.query.tourtype }),
      ...(req.query.slug && { tourtype: req.query.slug }),
      ...(req.query.placeId && { _id: req.query.placeId }),
      ...(req.query.searchTerm && {
        $or: [
          { name: { $regex: req.query.searchTerm, $options: 'i' } },
          { province: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalPlaces = await Place.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthPlaces = await Place.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      places,
      totalPlaces,
      lastMonthPlaces,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteplace = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this tour place'));
  }
  try {
    await Place.findByIdAndDelete(req.params.placeId);
    res.status(200).json('The tour place has been deleted');
  } catch (error) {
    next(error);
  }
};