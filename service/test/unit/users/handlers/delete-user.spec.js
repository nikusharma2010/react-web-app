const assert = require('assert');
const NoUserError = require('../../../../src/error/NoUserFoundError');
const errorMock = new NoUserError();

describe('Delete user', () => {
  const execute = ctx => {
    const sut = require('../../../../src/users/handlers/delete-user');
    return sut(ctx);
  };
  describe('if successfull ', () => {
    beforeEach(() => {});

    it('should delete user ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a, b) => ({
              affectedRows: 1
            })
          }
        },
        params: {
          id: '1'
        }
      };
      assert.deepStrictEqual(await execute(ctx), true);
    });
  });
  describe('if unsuccessfull ', () => {
    beforeEach(() => {});

    it('should not delete user ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a, b) => ({
              affectedRows: 0
            })
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
