"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_mock_1 = __importDefault(require("../mock/user.mock"));
class UserRepository {
    getUser(userId) {
        const user = user_mock_1.default.userWithData;
        if (userId != user.id) {
            return "User not found";
        }
        return user;
    }
    createUser(user) {
        if (user.id == 0 || user.id == null) {
            return "User not created";
        }
        else if (user.name.length == 0 || user.name == null) {
            return "User needs a name";
        }
        else if (user.email.length == 0 || user.email == null) {
            return "User needs an email";
        }
        else if (user.password.length == 0 || user.password == null) {
            return "User needs a password";
        }
        else {
            return "User created";
        }
    }
}
describe("UserRepository", () => {
    it("should get a user", () => {
        const userRepository = new UserRepository();
        const user = userRepository.getUser(1);
        expect(user).toBeTruthy();
    });
    it("should not get a user", () => {
        const userRepository = new UserRepository();
        const user = userRepository.getUser(2);
        expect(user).toBe("User not found");
    });
    it("should create a user", () => {
        const userRepository = new UserRepository();
        const user = userRepository.createUser(user_mock_1.default.userWithData);
        expect(user).toBe("User created");
    });
    it("should not create a user", () => {
        const userRepository = new UserRepository();
        const user = userRepository.createUser(user_mock_1.default.userWithInvalidData);
        expect(user).toBe("User not created");
    });
    it("should not create an user because of an invalid email", () => {
        const userRepository = new UserRepository();
        const user = userRepository.createUser(user_mock_1.default.userWithInvalidEmail);
        expect(user).toBe("User needs an email");
    });
    it("should not create an user because of an invalid password", () => {
        const userRepository = new UserRepository();
        const user = userRepository.createUser(user_mock_1.default.userWithInvalidPassword);
        expect(user).toBe("User needs a password");
    });
});
