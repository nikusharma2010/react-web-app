const pool = require('./db-connection');

const connectDB = (req, resp, next) => {
  console.log('------- GET DB CONNECTION ----------');
  req.dbConnect = pool;
  next();
};

module.exports = connectDB;
