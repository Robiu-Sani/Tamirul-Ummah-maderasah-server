import express from 'express';
import AboutController from './about.controllar';

const router = express.Router();

router.post('/create-about', AboutController.createAbout);
router.get('/', AboutController.getAllAbout);
router.get('/single-about/:id', AboutController.getSingleAbout);
router.delete('/delete-about/:id', AboutController.deleteSingleAbout);
router.patch(
  '/update-single-about-by-patch/:id',
  AboutController.updateSingleByPatchAbout,
);
router.put(
  '/update-single-about-by-put/:id',
  AboutController.updateSingleByPutAbout,
);

export const about_router = router;
