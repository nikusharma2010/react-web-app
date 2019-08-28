module.exports = {
  port: process.env.PORT || 3070,
  db: {
    host: 'db',
    database: 'users',
    user: 'root',
    password: 'root',
    port: 3306
  }
};
