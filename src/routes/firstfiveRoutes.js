import express from 'express';
import { getProfilePhotos } from '../controllers/firstfiveController.js'; // Adjust the path accordingly

const router = express.Router();

// Route to get profile photos of the first 5 users
router.get('/five/profile-photos', getProfilePhotos);

export default router;
