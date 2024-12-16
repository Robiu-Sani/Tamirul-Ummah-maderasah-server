import express from 'express';
import FirstSamisterController from './1stsamester.controllar';

const router = express.Router();

router.post(
  '/create-firstSamister',
  FirstSamisterController.createFirstSamister,
);
router.get('/', FirstSamisterController.getAllFirstSamister);
router.get(
  '/single-firstSamister/:id',
  FirstSamisterController.getSingleFirstSamister,
);
router.delete(
  '/delete-firstSamister/:id',
  FirstSamisterController.deleteSingleFirstSamister,
);
router.patch(
  '/update-single-firstSamister-by-patch/:id',
  FirstSamisterController.updateSingleByPatchFirstSamister,
);
router.put(
  '/update-single-firstSamister-by-put/:id',
  FirstSamisterController.updateSingleByPutFirstSamister,
);

export const firstSamister_router = router;
