const Router = require('koa-router');
const router = new Router();

const handlers = require('./users/handlers/handler');

const setup = app => {
  /** Fetch All Users  */
  router.get('/users', handlers.find);

  /** Fetch User By Id  */
  router.get('/user/:id', handlers.findById);

  /** Delete User By Id  */
  router.delete('/user/:id', handlers.deleteUserById);

  /** Create User By Id  */
  router.post('/user', handlers.createUserById);

  /** Create User By Id  */
  router.put('/user/:id', handlers.updateUserById);

  app.use(router.routes());
  app.use(router.allowedMethods());
};

module.exports = {
  setup
};
