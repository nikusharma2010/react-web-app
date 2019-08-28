const td = require('testdouble');
const assert = require('assert');
const mockUsers = {
  users: [
    {
      firstName: 'Niku',
      lastName: 'Sharma',
      email: 'homer@thesimpsons.com',
      mobile: '001'
    }
  ]
};

describe('Handler', () => {
  describe('Find all users', () => {
    const ctx = {
      body: {
      }
    };
    beforeEach(async () => {
      const mockUserDataCall = td.replace('../../../../src/users/handlers/find-users');
      td.when(mockUserDataCall(ctx)).thenResolve(mockUsers.users);
      await require('../../../../src/users/handlers/handler').find(ctx);
    });

    it('should set body with all users', () => {
      assert.deepStrictEqual(ctx.body.users, mockUsers.users);
    });
  });
  describe('Find User By ID ', () => {
    const ctx = {
      body: {
      }
    };
    beforeEach(async () => {
      const mockUserDataCall = td.replace('../../../../src/users/handlers/find-by-id');
      td.when(mockUserDataCall(ctx)).thenResolve(mockUsers.users);
      await require('../../../../src/users/handlers/handler').findById(ctx);
    });

    it('should set body with a single user', () => {
      assert.deepStrictEqual(ctx.body.user, mockUsers.users[0]);
    });
  });
  describe('Delete User By ID ', () => {
    const ctx = {
      body: {
      }
    };
    beforeEach(async () => {
      const mockUserDataCall = td.replace('../../../../src/users/handlers/delete-user');
      td.when(mockUserDataCall(ctx)).thenResolve(true);
      await require('../../../../src/users/handlers/handler').deleteUserById(ctx);
    });

    it('should set body with a status true for removed user', () => {
      assert.deepStrictEqual(ctx.body.deleted, true);
    });
  });
  describe('Create User ', () => {
    const ctx = {
      body: {
      }
    };
    beforeEach(async () => {
      const mockUserDataCall = td.replace('../../../../src/users/handlers/create-user');
      td.when(mockUserDataCall(ctx)).thenResolve(true);
      await require('../../../../src/users/handlers/handler').createUserById(ctx);
    });

    it('should set body with a status true for created user', () => {
      assert.deepStrictEqual(ctx.body.created, true);
    });
  });
  describe('Update User ', () => {
    const ctx = {
      body: {
      }
    };
    beforeEach(async () => {
      const mockUserDataCall = td.replace('../../../../src/users/handlers/update-user');
      td.when(mockUserDataCall(ctx)).thenResolve(true);
      await require('../../../../src/users/handlers/handler').updateUserById(ctx);
    });

    it('should set body with a status true for updated user', () => {
      assert.deepStrictEqual(ctx.body.updated, true);
    });
  });
});
