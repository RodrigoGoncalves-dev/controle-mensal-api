"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor() {
        this._service = user_service_1.default;
    }
    async getUserById(userId) {
        const user = await this._service.getUser(userId);
        return user;
    }
}
exports.default = new UserController();
