import jwt, { SignOptions } from 'jsonwebtoken';

import { IPayload } from '../interfaces';

export function createToken(payload: IPayload) {
  const config: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  }

  const token = jwt.sign(payload, 'secret', config);
  return token;
}

export function validateTokenUser(token: string) {
  const verify = jwt.verify(token, 'secret');
  return verify;
}