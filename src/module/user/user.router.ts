import express from 'express';
import UserController from './user.controllar';

const router = express.Router();

router.post('/create-user', UserController.createUser);
router.get('/', UserController.getAllUser);
router.get('/single-user/:id', UserController.getSingleUser);
router.delete('/delete-user/:id', UserController.deleteSingleUser);
router.patch(
  '/update-single-user-by-patch/:id',
  UserController.updateSingleByPatchUser,
);
router.put(
  '/update-single-user-by-put/:id',
  UserController.updateSingleByPutUser,
);

export const user_router = router;
