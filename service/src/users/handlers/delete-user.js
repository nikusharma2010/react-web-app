const NoUserError = require('../../error/NoUserFoundError');

/** * Get the Data from DB USERS Table */
const deleteUserById = async (ctx) => {
  let result = await ctx.req.dbConnect.query('DELETE FROM USERS where id =' + ctx.params.id);
  if (result.affectedRows <= 0) {
    throw new NoUserError();
  }
  return true;
};
module.exports = deleteUserById;
