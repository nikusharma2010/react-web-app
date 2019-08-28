'use strict';

const http = require('http');
const app = require('./app')();
const server = http.createServer(app.callback());

module.exports = server.listen(3070, err => {
  if (err) return console.error(`Failed to start server`, err);
  console.log(`Server started on  http://localhost:3070`);
});
