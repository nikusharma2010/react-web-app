const NoUserError = require('../../error/NoUserFoundError');
const InvalidInputError = require('../../error/InvalidInputError');

/** * Get the Data from DB USERS Table */

const updateUserById = async (ctx) => {
  let user = ctx.request.body;
  validateInputs(user);

  let result = await ctx.req.dbConnect.query('UPDATE USERS SET ? where ID =' + ctx.params.id, user);
  if (result.affectedRows <= 0) {
    throw new NoUserError();
  }
  return true;
};
const validateInputs = (user) => {
  if (!user) {
    throw new InvalidInputError('Invalid Emlpyee Details');
  }
  if (!user.id) {
    throw new InvalidInputError('Invalid Emlpyee Id');
  }
};

module.exports = updateUserById;
