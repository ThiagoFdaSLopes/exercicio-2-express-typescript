import express from 'express';
import LoginController from '../controllers/login.controller';
import { validationLogin } from '../middlewares/validationLogin';

const loginController = new LoginController();

const router = express.Router();

router.post('/', validationLogin, loginController.userExist);

export default router;