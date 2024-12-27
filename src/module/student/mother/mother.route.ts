import express from 'express';
import MotherController from './mother.controller';

const router = express.Router();

router.post('/create-mother', MotherController.createMother);
router.get('/', MotherController.getAllMother);
router.get('/table', MotherController.getTableMother);
router.get('/single-mother/:id', MotherController.getSingleMother);
router.delete('/delete-mother/:id', MotherController.deleteSingleMother);
router.patch(
  '/update-single-mother-by-patch/:id',
  MotherController.updateSingleByPatchMother,
);
router.put(
  '/update-single-mother-by-put/:id',
  MotherController.updateSingleByPutMother,
);

export const Mother_router = router;
