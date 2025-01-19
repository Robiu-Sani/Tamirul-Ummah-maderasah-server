import express from 'express';
import releaseControllar from './release.controllar';

const router = express.Router();

router.post('/create-date', releaseControllar.createReleaseDate);
router.get('/', releaseControllar.getReleaseDate);
router.patch('/update/:id', releaseControllar.updateSingleReleaseDate);

export const release_route = router;
