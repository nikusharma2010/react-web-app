const assert = require('assert');
const Sut = require('../../../src/error/NoUserFoundError');

describe('No User Found Error', () => {
  describe('with default properties', () => {
    it('should throw correctly', () => {
      assert.throws(() => {
        throw new Sut();
      }, Sut);
    });

    it('should set default message', () => {
      assert.throws(
        () => {
          throw new Sut();
        },
        err => {
          return err.message === 'No such user found, check user again !!!';
        }
      );
    });

    it('should set default status', () => {
      assert.throws(
        () => {
          throw new Sut();
        },
        err => {
          return err.statusCode === 422;
        }
      );
    });
  });

  describe('with overridden properties', () => {
    it('should throw correctly', () => {
      assert.throws(() => {
        throw new Sut('Page not found', 500);
      }, Sut);
    });

    it('should set correct message', () => {
      assert.throws(
        () => {
          throw new Sut('Validation error', 500);
        },
        err => {
          return err.message === 'Validation error';
        }
      );
    });

    it('should set correct status', () => {
      assert.throws(
        () => {
          throw new Sut('Page not found', 500);
        },
        err => {
          return err.statusCode === 500;
        }
      );
    });
  });
});
