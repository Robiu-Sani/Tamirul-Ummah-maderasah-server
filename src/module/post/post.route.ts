import express from 'express';
import FeeController from '../student/education-fee/fee.controllar';

const router = express.Router();

router.post('/create-fee', FeeController.createFee);
router.get('/', FeeController.getAllFee);
router.get('/single-fee/:id', FeeController.getSingleFee);
router.delete('/delete-fee/:id', FeeController.deleteSingleFee);
router.patch(
  '/update-single-fee-by-patch/:id',
  FeeController.updateSingleByPatchFee,
);
router.put('/update-single-fee-by-put/:id', FeeController.updateSingleByPutFee);

export const fee_router = router;
