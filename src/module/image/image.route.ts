import express from 'express';
import imageControllar from './image.controllar';

const router = express.Router();

router.post('/create-image', imageControllar.createImage);
router.get('/', imageControllar.getImage);
router.get('/client', imageControllar.getClientImages);

export const image_router = router;
