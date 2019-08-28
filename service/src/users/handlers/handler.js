const getUsers = require('./find-users');
const getUserByid = require('./find-by-id');
const deleteUserById = require('./delete-user');
const createUserById = require('./create-user');
const updateUserById = require('./update-user');
/**
 * main hanlder for the finder
 */
const handlers = {
  find: async ctx => {
    /** * implement logic */
    const users = await getUsers(ctx);
    /**  return body and status code */
    ctx.body = {
      users
    };
  },
  findById: async ctx => {
    /** * implement logic */
    const users = await getUserByid(ctx);
    /**  return body and status code */
    ctx.body = {
      user: users[0]
    };
  },
  deleteUserById: async ctx => {
    /** * implement logic */
    const checkStatus = await deleteUserById(ctx);
    /**  return body and status code */
    ctx.body = {
      deleted: checkStatus
    };
  },
  createUserById: async ctx => {
    /** * implement logic */
    const checkStatus = await createUserById(ctx);
    /**  return body and status code */
    ctx.body = {
      created: checkStatus
    };
  },
  updateUserById: async ctx => {
    /** * implement logic */
    const checkStatus = await updateUserById(ctx);
    /**  return body and status code */
    ctx.body = {
      updated: checkStatus
    };
  }
};

module.exports = handlers;
