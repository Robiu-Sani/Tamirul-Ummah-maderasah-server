"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardDeleteUserController = exports.deleteUserController = exports.updateUserController = exports.getUserByNameController = exports.getUserByRoleController = exports.getAllUsersController = exports.getUserByMongooseIdController = exports.getUserByIdController = exports.createUserController = void 0;
const user_services_1 = require("./user.services");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const newUser = yield (0, user_services_1.createUser)(user);
        res.status(201).json({
            success: true,
            data: newUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to create user',
        });
    }
});
exports.createUserController = createUserController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, user_services_1.getUserById)(id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to fetch user',
        });
    }
});
exports.getUserByIdController = getUserByIdController;
const getUserByMongooseIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, user_services_1.getByMongooseId)(id); // Updated to use the renamed function
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to fetch user',
        });
    }
});
exports.getUserByMongooseIdController = getUserByMongooseIdController;
const getAllUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_services_1.getAllUsers)();
        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to fetch users',
        });
    }
});
exports.getAllUsersController = getAllUsersController;
const getUserByRoleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const users = yield (0, user_services_1.getUserByRole)(role);
        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to fetch users by role',
        });
    }
});
exports.getUserByRoleController = getUserByRoleController;
const getUserByNameController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (!name || typeof name !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'Invalid name query parameter',
            });
        }
        const users = yield (0, user_services_1.getUserByName)(name);
        res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to search users by name',
        });
    }
});
exports.getUserByNameController = getUserByNameController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userData = req.body;
        const updatedUser = yield (0, user_services_1.updateUser)(id, userData);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to update user',
        });
    }
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedUser = yield (0, user_services_1.deleteUser)(id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to delete user',
        });
    }
});
exports.deleteUserController = deleteUserController;
const hardDeleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedUser = yield (0, user_services_1.hardDeleteUser)(id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to permanently delete user',
        });
    }
});
exports.hardDeleteUserController = hardDeleteUserController;
