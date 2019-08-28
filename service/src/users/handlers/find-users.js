const dataMapper = require('./mapper');
/** * Get the Data from DB USERS Table */
const getUsers = async (ctx) => {
  let users = [];
  let result = await ctx.req.dbConnect.query('SELECT * FROM USERS');
  if (result.length > 0) {
    users = dataMapper(result);
  }
  return users;
};
module.exports = getUsers;
