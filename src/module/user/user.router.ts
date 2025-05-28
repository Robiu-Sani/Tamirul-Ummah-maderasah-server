import express from 'express';
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  getUserByMongooseIdController,
  getUserByNameController,
  getUserByRoleController,
  hardDeleteUserController,
  updateUserController,
} from './user.controller';

const router = express.Router();

// User CRUD routes
router.route('/').post(createUserController).get(getAllUsersController);

// Search routes
router.get('/search', getUserByNameController as express.RequestHandler);
router.get('/role/:role', getUserByRoleController as express.RequestHandler);

// User ID-based routes
router
  .route('/id/:id')
  .get(getUserByIdController as express.RequestHandler)
  .patch(updateUserController as express.RequestHandler)
  .delete(deleteUserController as express.RequestHandler);

// Mongoose ID-based routes
router
  .route('/mongoose/:id')
  .get(getUserByMongooseIdController as express.RequestHandler);

// Hard delete route (admin-only)
router.delete(
  '/hard-delete/:id',
  hardDeleteUserController as express.RequestHandler,
);

export const user_router = router;
