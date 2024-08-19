import UserMock from "../mock/user.mock";

class UserRepository {

  getUser(userId: number) {
    const user = UserMock.userWithData;

    if(userId != user.id) {
      return "User not found";
    }

    return user;
  }

  createUser(user: any) {
    if(user.id == 0 || user.id == null) {
      return "User not created";
    } else if (user.name.length == 0 || user.name == null) {
      return "User needs a name";
    } else if (user.email.length == 0 || user.email == null) {
      return "User needs an email";
    } else if (user.password.length == 0 || user.password == null) {
      return "User needs a password";
    } else {
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
    const user = userRepository.createUser(UserMock.userWithData);
    expect(user).toBe("User created");
  });

  it("should not create a user", () => {
    const userRepository = new UserRepository();
    const user = userRepository.createUser(UserMock.userWithInvalidData);
    expect(user).toBe("User not created");
  });

  it("should not create an user because of an invalid email", () => {
    const userRepository = new UserRepository();
    const user = userRepository.createUser(UserMock.userWithInvalidEmail);
    expect(user).toBe("User needs an email");
  });

  it("should not create an user because of an invalid password", () => {
    const userRepository = new UserRepository();
    const user = userRepository.createUser(UserMock.userWithInvalidPassword);
    expect(user).toBe("User needs a password");
  });
})