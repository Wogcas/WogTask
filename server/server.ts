import express from 'express';
import "dotenv/config";
import { PORT } from './utils/Config';
import { connection } from './connection';

connection.initialize();

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
