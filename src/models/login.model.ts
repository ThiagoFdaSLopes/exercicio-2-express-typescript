import { Pool, RowDataPacket } from "mysql2/promise";
import { ILogin, IPayload } from "../interfaces";

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async userExist(body: ILogin): Promise<IPayload> {
    const [[result]] = await this.connection.execute<RowDataPacket[] & IPayload>('SELECT id, name, email FROM Users WHERE email = ? AND password = ?',
    [body.email, body.password]);

    return result as IPayload;
  }
}