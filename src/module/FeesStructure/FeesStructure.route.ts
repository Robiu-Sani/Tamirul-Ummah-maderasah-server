import express from 'express';
import FeesStructureController from './FeesStructure.controllar';

const router = express.Router();

router.post(
  '/create-feesStructure',
  FeesStructureController.createFeesStructure,
);
router.get('/', FeesStructureController.getAllFeesStructure);
router.get(
  '/single-feesStructure/:id',
  FeesStructureController.getSingleFeesStructure,
);
router.delete(
  '/delete-feesStructure/:id',
  FeesStructureController.deleteSingleFeesStructure,
);
router.patch(
  '/update-single-feesStructure-by-patch/:id',
  FeesStructureController.updateSingleByPatchFeesStructure,
);
router.put(
  '/update-single-feesStructure-by-put/:id',
  FeesStructureController.updateSingleByPutFeesStructure,
);

export const feesStructure_router = router;
