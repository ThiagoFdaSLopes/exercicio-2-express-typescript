import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'db',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});