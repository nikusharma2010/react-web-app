const InvalidInputError = require('../../error/InvalidInputError');
/** * Get the Data from DB USERS Table */
const createUserById = async (ctx) => {
  const user = ctx.request.body;
  /** * Check the request body and throw exception if not valid  */
  validateInputs(user);

  /** Call DB to save the data */
  const result = await ctx.req.dbConnect.query('INSERT INTO USERS SET ? ', user);
  if (result.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
};

const validateInputs = (user) => {  
  if (!user) {
    throw new InvalidInputError('Invalid Emlpyee Details');
  }
  if (!user.id) {
    throw new InvalidInputError('Invalid Emlpyee Id');
  }
  if (!user.firstName) {
    throw new InvalidInputError('Invalid Emlpyee firstName');
  }
  if (!user.lastName) {
    throw new InvalidInputError('Invalid Emlpyee lastName');
  }
};
module.exports = createUserById;
