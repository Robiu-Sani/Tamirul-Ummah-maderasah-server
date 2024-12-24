import express from 'express';
import TeacherController from './teacher.controllar';

const router = express.Router();

router.post('/create-teacher', TeacherController.createTeacher);
router.get('/', TeacherController.getAllTeacher);
router.get('/table', TeacherController.getTableTeacher);
router.get('/single-teacher/:id', TeacherController.getSingleTeacher);
router.delete('/delete-teacher/:id', TeacherController.deleteSingleTeacher);
router.patch(
  '/update-single-teacher-by-patch/:id',
  TeacherController.updateSingleByPatchTeacher,
);
router.put(
  '/update-single-teacher-by-put/:id',
  TeacherController.updateSingleByPutTeacher,
);

export const teacher_router = router;
