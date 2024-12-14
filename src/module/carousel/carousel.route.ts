import express from 'express';
import SliderController from './carousel.controllar';

const router = express.Router();

router.post('/create-slide', SliderController.createSlider);
router.get('/', SliderController.getAllSlider);
router.get('/single-slide/:id', SliderController.getSingleSlider);
router.delete('/delete-slide/:id', SliderController.deleteSingleSlider);
router.patch(
  '/update-single-slide-by-patch/:id',
  SliderController.updateSingleByPatchSlider,
);
router.put(
  '/update-single-slide-by-put/:id',
  SliderController.updateSingleByPutSlider,
);

export const slide_router = router;
