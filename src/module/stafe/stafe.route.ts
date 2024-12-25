import express from 'express';
import StafeController from './stafe.controllar';

const router = express.Router();

router.post('/create-stafe', StafeController.createStafe);
router.get('/', StafeController.getAllStafe);
router.get('/table', StafeController.getTableStaff);
router.get('/single-stafe/:id', StafeController.getSingleStafe);
router.delete('/delete-stafe/:id', StafeController.deleteSingleStafe);
router.patch(
  '/update-single-stafe-by-patch/:id',
  StafeController.updateSingleByPatchStafe,
);
router.put(
  '/update-single-stafe-by-put/:id',
  StafeController.updateSingleByPutStafe,
);

export const stafe_router = router;
