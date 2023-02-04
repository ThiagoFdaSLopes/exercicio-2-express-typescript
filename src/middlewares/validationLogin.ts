import { NextFunction, Request, Response } from "express";
import Joi from 'joi';
import { ILogin } from "../interfaces";


const validateBody = (body: ILogin) => Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
}).validate(body);

export const validationLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateBody(req.body);

  if(error) return res.status(404).json({ message: error.message });

  next();
}