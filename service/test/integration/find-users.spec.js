const request = require('supertest');
const server = require('../../app/server');
const assert = require('assert');
// const URL = process.env.SUT_URL;

describe('GET /users', () => {
  it('responds with content-type - json', (done) => {
    request(server)
      .get('/users')
      .expect('Content-Type', /json/, done);
  });
  it('responds with status - 200', (done) => {
    request(server)
      .get('/users')
      .set('Content-Type', 'application/json')
      .expect(200, done);
  });
  it('responds with users - at least one user retured', (done) => {
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.users.length > 0, true);
        done();
      });
  });
});
