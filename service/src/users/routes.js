const Router = require('koa-router');
const userRouter = new Router();

const handlers = require('./handlers/handler');

/** Fetch All Users  */
userRouter.get('/users', handlers.find);

/** Fetch User By Id  */
userRouter.get('/user/:id', handlers.findById);

/** Delete User By Id  */
userRouter.delete('/user/:id', handlers.deleteUserById);

/** Create User By Id  */
userRouter.post('/user', handlers.createUserById);

/** Create User By Id  */
userRouter.put('/user/:id', handlers.updateUserById);

userRouter.routes();
userRouter.allowedMethods();

module.exports = {
  userRouter
};
