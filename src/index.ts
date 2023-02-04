import app from './app';
import connection from './models/connection';

app.listen(process.env.PORT, async () => {
  console.log(`Estou ouvindo fofocas na porta ${process.env.PORT}`);
});