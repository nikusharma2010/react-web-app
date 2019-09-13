const pool = require('./db-connection');

const connectDB = async (req, resp, next) => {
  console.log('------- GET DB CONNECTION ----------');
  req.dbConnect = pool;
  await next();
};

module.exports = connectDB;
