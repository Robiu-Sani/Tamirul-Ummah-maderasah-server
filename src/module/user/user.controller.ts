/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getByMongooseId, // Changed from getbymongooseId to match the service fix
  getUserById,
  getUserByName,
  getUserByRole,
  hardDeleteUser,
  updateUser,
} from './user.services';

const createUserController = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = await createUser(user);
    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to create user',
    });
  }
};

const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch user',
    });
  }
};

const getUserByMongooseIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getByMongooseId(id); // Updated to use the renamed function

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch user',
    });
  }
};

const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch users',
    });
  }
};

const getUserByRoleController = async (req: Request, res: Response) => {
  try {
    const { role } = req.params;

    // Validate the role
    const validRoles = ['admin', 'teacher', 'student', 'parent'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role specified',
      });
    }

    const users = await getUserByRole(
      role as 'admin' | 'teacher' | 'student' | 'parent',
    );

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to fetch users by role',
    });
  }
};

const getUserByNameController = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    if (!name || typeof name !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Invalid name query parameter',
      });
    }

    const users = await getUserByName(name);

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to search users by name',
    });
  }
};

const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userData = req.body;

    const updatedUser = await updateUser(id, userData);

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found or already deleted',
      });
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to update user',
    });
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found or already deleted',
      });
    }

    res.status(200).json({
      success: true,
      data: deletedUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to delete user',
    });
  }
};

const hardDeleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await hardDeleteUser(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      data: deletedUser,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to permanently delete user',
    });
  }
};

export {
  createUserController,
  getUserByIdController,
  getUserByMongooseIdController,
  getAllUsersController,
  getUserByRoleController,
  getUserByNameController,
  updateUserController,
  deleteUserController,
  hardDeleteUserController,
};
