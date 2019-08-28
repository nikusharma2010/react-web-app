'use strict';

const assert = require('assert');
const dataMapper = require('../../../../src/users/handlers/mapper');
const data = {
  'users': [{
    'firstName': 'Niku',
    'lastName': 'Sharma',
    'email': 'homer@thesimpsons.com',
    'mobile': '001'
  },
  {
    'firstName': 'James',
    'lastName': 'Bond',
    'email': 'marge@thesimpsons.com',
    'mobile': '002'
  }
  ]
};

describe('user object mapper of size two ', () => {
  this.usersStub = dataMapper(data.users);

  beforeEach(() => {

  });

  it('should have users', () => {
    assert(this.usersStub);
  });

  for (let user of this.usersStub) {
    it('should populate firstName', () => {
      assert(user.firstName);
    });
    it('should populate lastName', () => {
      assert(user.lastName);
    });
    it('should populate mobile', () => {
      assert(user.mobile);
    });
    it('should populate email', () => {
      assert(user.email);
    });
  }
});
