import express from 'express';
import StudentController from './student.controllar';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);
router.get('/single-student/:id', StudentController.getSingleStudent);
router.delete('/delete-student/:id', StudentController.deleteSingleStudent);
router.patch(
  '/update-single-student-by-patch/:id',
  StudentController.updateSingleByPatchStudent,
);
router.put(
  '/update-single-student-by-put/:id',
  StudentController.updateSingleByPutStudent,
);

export const student_router = router;
