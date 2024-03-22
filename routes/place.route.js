import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, getplaces } from '../controllers/place.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getplaces', getplaces)


export default router;