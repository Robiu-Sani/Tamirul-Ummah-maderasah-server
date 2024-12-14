import express from 'express';
import InstitutionController from './contact.controllar';

const router = express.Router();

router.post('/create-institution', InstitutionController.createInstitution);
router.get('/', InstitutionController.getAllInstitution);
router.get(
  '/single-institution/:id',
  InstitutionController.getSingleInstitution,
);
router.delete(
  '/delete-institution/:id',
  InstitutionController.deleteSingleInstitution,
);
router.patch(
  '/update-single-institution-by-patch/:id',
  InstitutionController.updateSingleByPatchInstitution,
);
router.put(
  '/update-single-institution-by-put/:id',
  InstitutionController.updateSingleByPutInstitution,
);

export const institution_router = router;
