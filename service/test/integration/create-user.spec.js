const request = require('supertest');
const server = require('../../app/server');
const assert = require('assert');

const mockUser = {
  id: '7',
  firstName: 'Niku',
  lastName: 'Sharma',
  email: 'test@test.com',
  mobile: '001'
};

describe('POST /user', () => {
  it('user created successfully', (done) => {
    request(server)
      .post('/user')
      .send(mockUser)
      .set('Content-Type', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) return err;
        assert.strictEqual(res.body.created, true);
        done();
      });
  });
});
