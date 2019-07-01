const express = require('express');
const {execSync} = require('child_process');

const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/getblockcount', (req, res) => {
  const output = execSync('bitcoin-cli getblockcount');
  res.send(output);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));