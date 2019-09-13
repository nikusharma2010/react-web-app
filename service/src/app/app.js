const Koa = require('koa');
const middleware = require('../middleware/middleware');
const { userRouter } = require('../users/routes');

const app = new Koa();

/** Setup middleware */
middleware(app);
/** Setup Routers */
app.use(userRouter.routes());

module.exports = app;
