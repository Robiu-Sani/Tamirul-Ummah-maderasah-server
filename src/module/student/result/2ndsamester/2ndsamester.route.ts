import express from 'express';
import SecendSamisterController from './2ndsamester.controllar';

const router = express.Router();

router.post(
  '/create-secendSamister',
  SecendSamisterController.createSecendSamister,
);
router.get('/', SecendSamisterController.getAllSecendSamister);
router.get(
  '/single-secendSamister/:id',
  SecendSamisterController.getSingleSecendSamister,
);
router.delete(
  '/delete-secendSamister/:id',
  SecendSamisterController.deleteSingleSecendSamister,
);
router.patch(
  '/update-single-secendSamister-by-patch/:id',
  SecendSamisterController.updateSingleByPatchSecendSamister,
);
router.put(
  '/update-single-secendSamister-by-put/:id',
  SecendSamisterController.updateSingleByPutSecendSamister,
);

export const secendSamister_router = router;
