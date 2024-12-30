import express from 'express';
import FirstTutiralController from './1stutiral.controllar';

const router = express.Router();

router.post('/create-firstTutiral', FirstTutiralController.createFirstTutiral);
router.get('/', FirstTutiralController.getAllFirstTutiral);
router.get('/table', FirstTutiralController.getTableStudentFirstTutiralResult);
router.get(
  '/single-firstTutiral/:id',
  FirstTutiralController.getSingleFirstTutiral,
);
router.delete(
  '/delete-firstTutiral/:id',
  FirstTutiralController.deleteSingleFirstTutiral,
);
router.patch(
  '/update-single-firstTutiral-by-patch/:id',
  FirstTutiralController.updateSingleByPatchFirstTutiral,
);
router.put(
  '/update-single-firstTutiral-by-put/:id',
  FirstTutiralController.updateSingleByPutFirstTutiral,
);

export const firstTutiral_router = router;
