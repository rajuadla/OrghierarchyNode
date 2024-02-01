const express = require('express');
var cors = require('cors')

const data = require('./data.json');

const app = express();
app.use(cors())
const port = 3000;

app.get('/', (req, res) => {
  const orgData = data.data;
  res.send(orgData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});