const NoUserError = require('../../error/NoUserFoundError');

const dataMapper = require('./mapper');
/** * Get the Data from DB USERS Table */
const getUserById = async (ctx) => {
  let users = [];
  let result = await ctx.req.dbConnect.query('SELECT * FROM USERS where id =' + ctx.params.id);
  users = dataMapper(result);
  if (users.length <= 0) {
    throw new NoUserError();
  }
  return users;
};
module.exports = getUserById;
