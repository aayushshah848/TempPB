const controller = require('./controller/controller');
const express = require('express');
const app = express();

app.get('/', async function (req, res) {
  const frontEnd = req.query.frontend;
  const backEnd = req.query.backend;
  if (frontEnd === undefined || backEnd === undefined) res.status(400);
  else {
    const file = await controller(frontEnd, backEnd).nodeController();
    res.download(file);
  }
});

app.get('/json', async function (req, res) {
  const frontEnd = req.query.frontend;
  const backEnd = req.query.backend;
  console.log(backEnd);
  if (frontEnd === undefined || backEnd === undefined) res.status(400);
  else {
    const output = controller(frontEnd, backEnd).jsonController();
    res.setHeader('content-type', 'application/json');
    res.json(output);
  }
});

app.listen(3001);