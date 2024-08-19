"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = __importDefault(require("../repository/user.repository"));
class UserService {
    constructor() {
        this._repository = user_repository_1.default;
    }
    async getUser(userId) {
        try {
            const user = await this._repository.getUser(userId);
            return user;
        }
        catch (error) {
            throw Error();
        }
    }
}
exports.default = new UserService();
