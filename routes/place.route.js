import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteplace, getplaces, updateplace, generateTravelPlacesReport } from '../controllers/place.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getplaces', getplaces)
router.delete('/deleteplace/:placeId/:userId', verifyToken, deleteplace)
router.put('/updateplace/:placeId/:userId', verifyToken, updateplace)
router.post('/reports/generate', verifyToken, generateTravelPlacesReport)


export default router;