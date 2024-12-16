import express from 'express';
import SecendTutiralController from './2ndtutiral.controllar';

const router = express.Router();

router.post(
  '/create-secendTutiral',
  SecendTutiralController.createSecendTutiral,
);
router.get('/', SecendTutiralController.getAllSecendTutiral);
router.get(
  '/single-secendTutiral/:id',
  SecendTutiralController.getSingleSecendTutiral,
);
router.delete(
  '/delete-secendTutiral/:id',
  SecendTutiralController.deleteSingleSecendTutiral,
);
router.patch(
  '/update-single-secendTutiral-by-patch/:id',
  SecendTutiralController.updateSingleByPatchSecendTutiral,
);
router.put(
  '/update-single-secendTutiral-by-put/:id',
  SecendTutiralController.updateSingleByPutSecendTutiral,
);

export const secendTutiral_router = router;
