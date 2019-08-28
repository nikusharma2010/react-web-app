const assert = require('assert');
// const td = require('testdouble');
const NoUserError = require('../../../../src/error/NoUserFoundError');
const errorMock = new NoUserError();

const mockUsers = [{
  firstName: 'Niku',
  lastName: 'Sharma',
  email: 'homer@thesimpsons.com',
  mobile: '001'
}];
const returnUsers = [{
  firstName: 'Niku',
  lastName: 'Sharma',
  email: 'homer@thesimpsons.com',
  mobile: '001'
}];

describe('Find user', () => {
  const execute = ctx => {
    const sut = require('../../../../src/users/handlers/find-by-id');
    return sut(ctx);
  };
  describe('if successfull ', () => {
    it('should find user ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a) => (mockUsers)
          }
        },
        params: {
          id: '1'
        }
      };
      assert.deepStrictEqual(await execute(ctx), returnUsers);
    });
  });
  describe('if unsuccessfull ', () => {
    beforeEach(() => {});

    it('should not find user ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a) => ([])
          }
        },
        params: {
          id: '1'
        }
      };
      try {
        await execute(ctx);
      } catch (error) {
        assert.deepStrictEqual(error, errorMock);
      }
    });
  });
});
