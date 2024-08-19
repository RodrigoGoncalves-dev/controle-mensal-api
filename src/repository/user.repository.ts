import connect from "../database/conn";
import userQuery from "../query/user.query";

class UserRepository {
  async getUser(userId: number): Promise<IUser> {
    const conn = await connect;
    try {
      const [rows] = await conn.query(userQuery.getUser, [userId]);
  
      if (Array.isArray(rows) && rows.length > 0) {
        return rows[0] as IUser;
      } else {
        throw new Error("USER_NOT_FOUND");
      }
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }
  

  async createUser(user: IUser) {
    const conn = await connect;
    try {
      const [rows] = await conn.query(
        userQuery.createUser, 
        [user.name, user.email, user.password]
      );

      return rows;
    } catch (error) {
      return error;
    }
  }
}

export default new UserRepository();