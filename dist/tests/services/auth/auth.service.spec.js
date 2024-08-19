"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_service_1 = __importDefault(require("../../../services/auth.service"));
const authService = auth_service_1.default;
describe("AuthService", () => {
    it("should create an instance", () => {
        expect(authService).toBeTruthy();
    });
    it("should make an auth call", () => {
    });
});
