const controller = require('./controller/controller');
const express = require('express');
// const { execFile } = require("child_process");
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
var cors = require('cors');
var app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', async function (req, res) {
  const frontEnd = req.query.frontend;
  const backEnd = req.query.backend;
const project = req.query.project;
  if (frontEnd === undefined || backEnd === undefined) res.status(400);
  else {
if (project == undefined) project = 'sample';
    const file = await controller(project).nodeController();
    res.download(file);
    /*setTimeout(() => controller().cleanUp('/home/ubuntu/airlift/basePackages/'+project), 1000);*/
  }
});

app.get('/json', async function (req, res) {
  const frontEnd = req.query.frontend;
  const backEnd = req.query.backend;
  const project = req.query.project;
  console.log(backEnd);
  if (frontEnd === undefined || backEnd === undefined) res.status(400);
  else {
      if (project == undefined) project = 'sample';

      try {
        const { stdout, stderr } = await execFile('./trigger.sh', [frontEnd, backEnd, project]);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
      } catch (e) {
        console.error(e); // should contain code (exit code) and signal (that caused the termination).
      }

//       execFile('./trigger.sh', [frontEnd, backEnd, project],  function (error, stdout, stderr) {
//     if (error !== null) {
//       console.log(error);
//     } else {
//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);
//     }
// });
    const output = controller(project).jsonController();
    res.setHeader('content-type', 'application/json');
    res.json(output);
  }
});

app.listen(3001);
