import dotenv from 'dotenv';
import express from 'express';
import { greet } from '@template/common';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send(greet(req.ip));
})

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(greet('server'));
  console.log(`Listening on port ${PORT}...`)
})