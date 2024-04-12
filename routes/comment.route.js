import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment, getPlaceComments, } from '../controllers/comment.controller.js';

const router = express.Router();


router.post('/create', verifyToken, createComment);
router.get('/getPlaceComments/:placeId', getPlaceComments);

export default router;