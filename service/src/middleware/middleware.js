const connectDB = require('../middleware/dbConnect');
const c2k = require('koa-connect');
const cors = require('koa-cors');
const Logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('../middleware/error-handler');

const middleware = (app) => {
  // Connection DB
  const dbConnect = c2k(connectDB);
  app.use(cors());
  app.use(bodyParser());
  app.use(Logger());
  app.use(dbConnect);
  app.use(errorHandler);
};
module.exports = middleware;
