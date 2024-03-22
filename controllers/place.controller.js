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