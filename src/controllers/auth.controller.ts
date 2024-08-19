import jwt from 'jsonwebtoken';
// import bcrypt from "bcrypt";
import userController from "./user.controller";

export default class AuthController {
  public async doLogon(email: string, password: string) {
    try {
      const user = await userController.getUserByEmail(email) as IUser;

      const token = jwt.sign({
        id: user.id, 
        name: user.name 
      }, 'CHINATOWNUSHDUS', { expiresIn: '1h' });

      return {
        user,
        token
      };
    } catch (error) {
      throw Error();
    }
  }
}