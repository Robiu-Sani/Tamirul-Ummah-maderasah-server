import express from 'express';
import SelaryController from './selary.controllar';

const router = express.Router();

router.post('/create-selary', SelaryController.createSelary);
router.get('/', SelaryController.getAllSelary);
router.get('/single-selary/:id', SelaryController.getSingleSelary);
router.delete('/delete-selary/:id', SelaryController.deleteSingleSelary);
router.patch(
  '/update-single-selary-by-patch/:id',
  SelaryController.updateSingleByPatchSelary,
);
router.put(
  '/update-single-selary-by-put/:id',
  SelaryController.updateSingleByPutSelary,
);

export const selary_router = router;
