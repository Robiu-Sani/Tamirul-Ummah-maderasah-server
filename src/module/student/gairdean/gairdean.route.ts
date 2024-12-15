import express from 'express';
import GairdeanController from './gairdean.controllar';

const router = express.Router();

router.post('/create-gairdean', GairdeanController.createGairdean);
router.get('/', GairdeanController.getAllGairdean);
router.get('/single-gairdean/:id', GairdeanController.getSingleGairdean);
router.delete('/delete-gairdean/:id', GairdeanController.deleteSingleGairdean);
router.patch(
  '/update-single-gairdean-by-patch/:id',
  GairdeanController.updateSingleByPatchGairdean,
);
router.put(
  '/update-single-gairdean-by-put/:id',
  GairdeanController.updateSingleByPutGairdean,
);

export const Gairdean_router = router;
