import express from 'express';
import FatherController from './father.controller';

const router = express.Router();

router.post('/create-father', FatherController.createFather);
router.get('/', FatherController.getAllFather);
router.get('/single-father/:id', FatherController.getSingleFather);
router.delete('/delete-father/:id', FatherController.deleteSingleFather);
router.patch(
  '/update-single-father-by-patch/:id',
  FatherController.updateSingleByPatchFather,
);
router.put(
  '/update-single-father-by-put/:id',
  FatherController.updateSingleByPutFather,
);

export const father_router = router;
