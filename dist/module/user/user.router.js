"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_router = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// User CRUD routes
router.route('/').post(user_controller_1.createUserController).get(user_controller_1.getAllUsersController);
// Search routes
router.get('/search', user_controller_1.getUserByNameController);
router.get('/role/:role', user_controller_1.getUserByRoleController);
// User ID-based routes
router
    .route('/id/:id')
    .get(user_controller_1.getUserByIdController)
    .patch(user_controller_1.updateUserController)
    .delete(user_controller_1.deleteUserController);
// Mongoose ID-based routes
router
    .route('/mongoose/:id')
    .get(user_controller_1.getUserByMongooseIdController);
// Hard delete route (admin-only)
router.delete('/hard-delete/:id', user_controller_1.hardDeleteUserController);
exports.user_router = router;
