const td = require('testdouble');

describe('users routes', () => {
  beforeEach(() => {
    this.use = td.function();

    this.handlers = {
      users: {
        find: td.function(),
        findById: td.function(),
        deleteUserById: td.function(),
        createUserById: td.function(),
        updateUserById: td.function()
      }
    };

    this.Router = td.constructor(['get', 'delete', 'post', 'put', 'routes', 'allowedMethods']);

    td.replace('koa-router', this.Router);
    td.replace('../../../src/users/handlers/handler.js', this.handlers.users);

    this.sut = require('../../../src/users/routes');
  });

  afterEach(td.reset);

  it('should setup users route', () => {
    td.verify(this.Router.prototype.get('/users', this.handlers.users.find));
  });
  it('should setup user by id route', () => {
    td.verify(this.Router.prototype.get('/user/:id', this.handlers.users.findById));
  });
  it('should setup delete user by id route', () => {
    td.verify(this.Router.prototype.delete('/user/:id', this.handlers.users.deleteUserById));
  });
  it('should setup create user route', () => {
    td.verify(this.Router.prototype.post('/user', this.handlers.users.createUserById));
  });
  it('should setup update user by id route', () => {
    td.verify(this.Router.prototype.put('/user/:id', this.handlers.users.updateUserById));
  });
});
