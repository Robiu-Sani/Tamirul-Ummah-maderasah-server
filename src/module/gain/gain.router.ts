import express from 'express';
import gainControllar from './gain.controllar';

const router = express.Router();

router.post('/create-gain', gainControllar.createGain);
router.get('/', gainControllar.getAllgain);
router.patch('/update-gain/:id', gainControllar.updateGain);
router.delete('/delete-gain/:id', gainControllar.deletGain);

export const gain_router = router;
