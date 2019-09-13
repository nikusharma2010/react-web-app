const assert = require('assert');
const Sut = require('../../../src/error/InvalidInputError');

describe('InvalidInputError ', () => {
  describe('with default properties', () => {
    it('should throw correctly', () => {
      assert.throws(() => {
        throw new Sut();
      }, Sut);
    });
    it('should set default title', () => {
      assert.throws(() => { throw new Sut(); },
        err => err.title === 'No Data Found');
    });
    it('should set default http status', () => {
      assert.throws(() => { throw new Sut(); },
        err => err.statusCode === 422);
    });
    it('should set default message', () => {
      assert.throws(() => { throw new Sut(); },
        err => err.message === 'Missing Mandatory Fields');
    });
    it('should display custome error code and messages', () => {
      assert.throws(() => { throw new Sut('Test Message', 500); },
        err =>
          (err.message === 'Test Message' && err.statusCode === 500)
      );
    });
  });
});
