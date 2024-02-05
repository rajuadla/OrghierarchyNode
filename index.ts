import express, { Request, Response, Application } from 'express';
import { Organizaion } from './types/orgdetails'; 

const cors = require('cors') 

const data = require('./data.json');

const app: Application = express();
app.use(cors())
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  const orgData: Organizaion[] = data.data;
  res.send(orgData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});