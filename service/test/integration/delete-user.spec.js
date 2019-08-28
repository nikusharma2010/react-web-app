const request = require('supertest');
const server = require('../../app/server');
const assert = require('assert');

describe('REMOVE /user/7', () => {
  it('user deleted successfully', (done) => {
    request(server)
      .delete('/user/7')
      .set('Content-Type', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) return err;
        assert.strictEqual(res.body.deleted, true);
        done();
      });
  });
  it('responds with error - code 422', (done) => {
    request(server)
      .get('/user/9')
      .set('Content-Type', 'application/json')
      .expect(422, done);
  });
  it('responds with error', (done) => {
    request(server)
      .get('/user/9')
      .set('Content-Type', 'application/json')
      .expect(422)
      .end((err, res) => {
        assert.strictEqual(res.body.message, 'No such user found, check user again !!!');
        assert.strictEqual(res.body.statusCode, 422);
        if (err) return err;
        done();
      });
  });
});
