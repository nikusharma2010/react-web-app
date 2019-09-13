const app = require('./app');

module.exports = app.listen(3070, err => {
  if (err) return console.error(`Failed to start server`, err);
  console.log(`Server Started on  http://localhost:3070`);
});
