const assert = require('assert');
const NoUserError = require('../../../../src/error/NoUserFoundError');
const errorMock = new NoUserError();

const mockUser = {
  firstName: 'Niku',
  lastName: 'Sharma',
  email: 'homer@thesimpsons.com',
  mobile: '001'
};

describe('Update user', () => {
  const execute = ctx => {
    const sut = require('../../../../src/users/handlers/update-user');
    return sut(ctx);
  };
  describe('if successfull ', () => {
    beforeEach(() => {});

    it('should update user ', async () => {
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
        },
        request: {
          body: mockUser
        }
      };
      const result = await execute(ctx);
      assert.deepStrictEqual(result, true);
    });
  });
  describe('if unsuccessfull ', () => {
    beforeEach(() => {});

    it('should not update user ', async () => {
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
        },
        request: {
          body: mockUser
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
