import express from 'express';
import imageControllar from './image.controllar';

const router = express.Router();

router.post('/create-image', imageControllar.createImage);

export const image_router = router;
