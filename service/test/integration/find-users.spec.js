const request = require('supertest')(process.env.SUT_URL);
const assert = require('assert');

describe('GET /users', () => {
  it('responds with content-type - json', (done) => {
    request
      .get('/users')
      .expect('Content-Type', /json/, done);
  });
  it('responds with status - 200', (done) => {
    request
      .get('/users')
      .set('Content-Type', 'application/json')
      .expect(200, done);
  });
  it('responds with users - at least one user retured', (done) => {
    request
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
