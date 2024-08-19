import userRepository from "../repository/user.repository";

class UserService {
  private _repository = userRepository;

  public async getUser(userId: number): Promise<IUser | Error> {
    try {
      const user = await this._repository.getUser(userId);

      return user;
    } catch (error: Error | any) {
      throw  Error(error.message);
    }
  }

  public async createUser(user: IUser) {
    try {
      const data = await this._repository.createUser(user);

      return data;
    } catch (error) {
      return error;
    }
  }
}

export default new UserService();