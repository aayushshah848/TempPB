const controller = require('./controller/controller');
const express = require('express');
// const { execFile } = require("child_process");
const execFile = util.promisify(require('child_process').execFile);
const app = express();

app.get('/', async function (req, res) {
  const frontEnd = req.query.frontend;
  const backEnd = req.query.backend;
  if (frontEnd === undefined || backEnd === undefined) res.status(400);
  else {
    const file = await controller(frontEnd, backEnd).nodeController();
    res.download(file);
    setTimeout(() => controller().cleanUp('C:\\Users\\Aayush-Yug\\Desktop\\Aerothon\\tmp\\b84d4bb0-efbb-476e-80b7-b37f19656792.zip'), 1000);
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
