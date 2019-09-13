const assert = require('assert');
const td = require('testdouble');
const InvalidInputError = require('../../../../src/error/InvalidInputError');
const mockUser = {
  id: '1',
  firstName: 'Niku',
  lastName: 'Sharma',
  email: 'homer@thesimpsons.com',
  mobile: '001'
};

describe('Create user', () => {
  const execute = ctx => {
    const sut = require('../../../../src/users/handlers/create-user');
    return sut(ctx);
  };
  describe('if successfull ', () => {
    beforeEach(() => { });
    afterEach(() => {
      td.reset();
    });

    it('should create user ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a, b) => ({
              affectedRows: 1
            })
          }
        },
        request: {
          body: mockUser
        }
      };
      assert.deepStrictEqual(await execute(ctx), true);
    });
  });
  describe('if unsuccessfull ', () => {
    beforeEach(() => { });
    afterEach(() => {
      td.reset();
    });

    it('should not create user ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a, b) => ({
              affectedRows: 0
            })
          }
        },
        request: {
          body: mockUser
        }
      };
      assert.deepStrictEqual(await execute(ctx), false);
    });
  });
  describe('validation checks  ', () => {
    it('should throw error user missing', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a, b) => ({
              affectedRows: 1
            })
          }
        },
        request: {
          body: undefined
        }
      };

      try {
        await execute(ctx);
      } catch (error) {
        assert.deepStrictEqual(error, new InvalidInputError('Invalid Emlpyee Details', 422));
      }
    });
    it('should throw error id missing ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a, b) => ({
              affectedRows: 1
            })
          }
        },
        request: {
          body: {
            firstName: 'Niku',
            lastName: 'Sharma',
            email: 'homer@thesimpsons.com',
            mobile: '001'
          }
        }
      };

      try {
        await execute(ctx);
      } catch (error) {
        assert.deepStrictEqual(error, new InvalidInputError('Invalid Emlpyee Id', 422));
      }
    });
    it('should throw error first name missing ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a, b) => ({
              affectedRows: 1
            })
          }
        },
        request: {
          body: {
            id: 1,
            lastName: 'Sharma',
            email: 'homer@thesimpsons.com',
            mobile: '001'
          }
        }
      };

      try {
        await execute(ctx);
      } catch (error) {
        assert.deepStrictEqual(error, new InvalidInputError('Invalid Emlpyee firstName', 422));
      }
    });
    it('should throw error id missing ', async () => {
      const ctx = {
        req: {
          dbConnect: {
            query: (a, b) => ({
              affectedRows: 1
            })
          }
        },
        request: {
          body: {
            id: 1,
            firstName: 'Niku',
            email: 'homer@thesimpsons.com',
            mobile: '001'
          }
        }
      };

      try {
        await execute(ctx);
      } catch (error) {
        assert.deepStrictEqual(error, new InvalidInputError('Invalid Emlpyee lastName', 422));
      }
    });
  });
  // describe('when error occured', async () => {
  //   const errorMock = new Error('A System Error Occurred');
  //   beforeEach(() => {});
  //   afterEach(() => {
  //     td.reset();
  //   });
  //   const ctx = {
  //     req: {
  //       dbConnect: {
  //         query: () => {
  //           throw errorMock;
  //         }
  //       }
  //     },
  //     request: {
  //       body: mockUser
  //     }
  //   };
  //   it('should bubble errors', async () => {
  //     try {
  //       await execute(ctx);
  //     } catch (error) {
  //       assert.deepStrictEqual(error, errorMock);
  //     }
  //   });
  // });
});
