import { Response, Request } from "express";
import LoginService from "../services/login.service";
import { createToken } from "../utils/jwtValidation";

export default class LoginController {
  constructor(private loginService = new LoginService()){}

  userExist = async (req: Request, res: Response) => {
    try {
      const result = await this.loginService.userExist(req.body);
      const token = createToken(result);
      res.status(200).json({ token });
    } catch (error) {
      res.status(404).json({ message: 'Usuario ou Login Incorretos'})
    }
  }
}