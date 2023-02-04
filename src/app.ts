import express from 'express';
import routerLogin from './routes/login';

const app = express();

app.use(express.json());
app.use('/login', routerLogin);

export default app;