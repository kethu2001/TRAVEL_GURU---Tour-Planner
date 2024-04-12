import Comment from '../models/comment.model.js';

export const createComment = async (req, res, next) => {
  try {
    const { content, placeId, userId } = req.body;

    if (userId !== req.user.id) {
      return next(
        errorHandler(403, 'You are not allowed to create this comment')
      );
    }

    const newComment = new Comment({
      content,
      placeId,
      userId,
    });
    await newComment.save();

    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

export const getPlaceComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ placeId: req.params.placeId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};