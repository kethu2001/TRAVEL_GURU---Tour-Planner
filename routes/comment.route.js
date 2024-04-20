import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment, editComment, deleteComment, getPlaceComments, getcomments, likeComment, } from '../controllers/comment.controller.js';

const router = express.Router();


router.post('/create', verifyToken, createComment);
router.get('/getPlaceComments/:placeId', getPlaceComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
router.get('/getcomments', verifyToken, getcomments);

export default router;