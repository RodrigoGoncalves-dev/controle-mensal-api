import userService from "../services/user.service";
import connect from "../database/conn";

class UserController {
  private _service = userService;

  public async getUserById(userId: number): Promise<IUser | Error> {
    try {
      const user = await this._service.getUser(userId);
      
      return user;
    } catch (error: any) {
      throw  Error(error.message);
    }
  }

  public async getUserByEmail(email: String): Promise<IUser | Error> {
    const conn = await connect;
    try {
      const [rows] = await conn.query("SELECT * FROM users WHERE email = ?",[email]);
      
      if (Array.isArray(rows) && rows.length > 0) {
        return rows[0] as IUser;
      } else {
        throw new Error("USER_NOT_FOUND");
      }
    } catch (error: any) {
      throw  Error(error.message);
    }
  }

  public async createUser(user: IUser) {
    const data = await this._service.createUser(user);
    return data;
  }
}

export default new UserController();