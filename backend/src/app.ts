import 'dotenv/config';
import express from 'express';
import routes from './routes';
import { Pool } from 'pg';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

routes(app);

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});

const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log(err);
  }
};
connectToDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

export default app;
