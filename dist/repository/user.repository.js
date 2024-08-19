"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conn_1 = __importDefault(require("../database/conn"));
class UserRepository {
    async getUser(userId) {
        try {
            const sql = await conn_1.default.query(UserQuery.getUser, userId);
            return sql;
        }
        catch (error) {
            throw Error("User not found");
        }
    }
    async createUser(user) {
        try {
            const sql = await conn_1.default.query(UserQuery.createUser, user);
        }
        catch (error) {
        }
    }
}
exports.default = new UserRepository();
