import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteplace, getplaces } from '../controllers/place.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getplaces', getplaces)
router.delete('/deleteplace/:placeId/:userId', verifyToken, deleteplace)


export default router;