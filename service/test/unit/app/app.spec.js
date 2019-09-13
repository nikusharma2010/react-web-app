const td = require('testdouble');
const assert = require('assert');

describe('Application App Test', () => {
  beforeEach(() => {
    this.sut = require('../../../src/app/app');
  });

  afterEach(td.reset);

  it('should setup app middleware correctly', () => {
    assert.strictEqual(this.sut.middleware.length, 6);
  });
  it('should setup app middleware for cors', () => {
    assert.strictEqual(this.sut.middleware[0]._name, 'cors');
  });
  it('should setup app middleware for bodyParser', () => {
    assert.strictEqual(this.sut.middleware[1].name, 'bodyParser');
  });

  it('should setup app middleware for logger', () => {
    assert.strictEqual(this.sut.middleware[2].name, 'logger');
  });
  it('should setup app middleware for koaConnect', () => {
    assert.strictEqual(this.sut.middleware[3].name, 'koaConnect');
  });
  it('should setup app middleware for errorHandler', () => {
    assert.strictEqual(this.sut.middleware[4].name, 'errorHandler');
  });
  it('should setup app middleware for product dispatch', () => {
    assert.strictEqual(this.sut.middleware[5].name, 'dispatch');
  });
});
