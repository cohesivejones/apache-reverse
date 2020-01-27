const express = require('express')
const uuid = require('uuid/v1');
const enableWs = require('express-ws');

const APP_PORT = 4000;
const APP_NAME = `SERVICE (instance ${uuid()})`;

const app = express();
enableWs(app)

app.ws('/ws/echo', (ws, req) => {
  ws.on('message', msg => ws.send(msg));
  ws.on('close', () => console.log('WebSocket was closed'));
})

app.listen(APP_PORT, () => console.log(`${APP_NAME} listening on port ${APP_PORT}!`));

