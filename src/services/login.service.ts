import connection from "../models/connection";
import LoginModel from "../models/login.model";
import { ILogin } from "../interfaces";

export default class LoginService {
  loginModel: LoginModel

  constructor() {
    this.loginModel = new LoginModel(connection)
  }

  async userExist(body: ILogin) {
    try {
      const result = await this.loginModel.userExist(body);
      return result;
    } catch (error) {
      throw new Error('Usuario ou login incorreto');
    }
  }
}