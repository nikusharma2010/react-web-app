const assert = require('assert');
// const td = require('testdouble');
const mockUsers = [{
  id: '1',
  firstName: 'Niku',
  lastName: 'Sharma',
  email: 'homer@thesimpsons.com',
  mobile: '001'
}];
const returnUsers = [{
  id: '1',
  firstName: 'Niku',
  lastName: 'Sharma',
  email: 'homer@thesimpsons.com',
  mobile: '001'
}];

describe('Find users', () => {
  const execute = ctx => {
    const sut = require('../../../../src/users/handlers/find-users');
    return sut(ctx);
  };
  describe('if successfull ', () => {
    it('should find users ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: () => (mockUsers)
          }
        }
      };
      assert.deepStrictEqual(await execute(ctx), returnUsers);
    });
  });
  describe('if unsuccessfull ', () => {
    beforeEach(() => {});

    it('should not find users ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: () => ([])
          }
        }
      };
      assert.deepStrictEqual(await execute(ctx), []);
    });
  });
});
