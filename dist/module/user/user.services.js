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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hardDeleteUser = exports.getUserByName = exports.getUserByRole = exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getByMongooseId = exports.getUserById = exports.createUser = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // Get current year
    const currentYear = new Date().getFullYear();
    // Find the last user with an ID starting with the current year
    const lastUser = yield user_model_1.default.findOne({ id: { $regex: `^${currentYear}` } }, {}, { sort: { id: -1 } });
    let newId;
    if (lastUser && lastUser.id) {
        // Extract the serial number part and increment
        const lastSerial = parseInt(lastUser.id.toString().slice(4), 10);
        newId = currentYear * 10000 + lastSerial + 1;
    }
    else {
        // First user of the year
        newId = currentYear * 10000 + 1;
    }
    // Create new user with the generated ID
    const newUser = yield user_model_1.default.create(Object.assign(Object.assign({}, user), { id: newId }));
    return newUser;
});
exports.createUser = createUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ id, isDeleted: false });
    return user;
});
exports.getUserById = getUserById;
const getByMongooseId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Fixed casing to camelCase
    const user = yield user_model_1.default.findById(id);
    return user;
});
exports.getByMongooseId = getByMongooseId;
const updateUser = (id, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_model_1.default.findOneAndUpdate({ id, isDeleted: false }, // Added isDeleted check
    userData, {
        new: true,
        runValidators: true,
    });
    return updatedUser;
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_model_1.default.findOneAndUpdate({ id, isDeleted: false }, // Added isDeleted check
    { isDeleted: true }, { new: true });
    return deletedUser;
});
exports.deleteUser = deleteUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find({ isDeleted: false });
    return users;
});
exports.getAllUsers = getAllUsers;
const getUserByRole = (role) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find({ role, isDeleted: false });
    return users;
});
exports.getUserByRole = getUserByRole;
const getUserByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find({
        name: { $regex: name, $options: 'i' },
        isDeleted: false,
    });
    return users;
});
exports.getUserByName = getUserByName;
const hardDeleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_model_1.default.findOneAndDelete({ id });
    return deletedUser;
});
exports.hardDeleteUser = hardDeleteUser;
