const express = require('express')
const uuid = require('uuid/v1');

const APP_PORT = 4000;
const APP_NAME = `SERVICE (instance ${uuid()})`;
const APP_VERSION = "1.0.0"
const appInfo = { appName: APP_NAME, version: APP_VERSION };

const app = express();

app.get('/', async (req, res, next) => {
  res.send(appInfo);
  return next();
});

app.listen(APP_PORT, () => console.log(`${APP_NAME} listening on port ${APP_PORT}!`));

