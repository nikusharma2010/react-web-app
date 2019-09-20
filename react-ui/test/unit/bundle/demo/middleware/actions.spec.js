
import { getUsers, getUser, createUser, removeUser } from '../../../../../src/bundle/demo/middleware/actions';
import * as actions from '../../../../../src/bundle/demo/middleware/action-types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as Mock from '../data/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user list action ', () => {
    const users = [{
        id: '1',
        firstName: 'James',
        lastName: 'Bond',
        email: 'marge@thesimpsons.com',
        mobile: '002001234567890'
    },
    {
        id: '2',
        firstName: 'Simon',
        lastName: 'Smith',
        email: 'maggie@thesimpsons.com',
        mobile: '003001234567890'
    }];

    beforeEach(() => {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates RECEIVE_USERS when fetching users has been done', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { users: users },
            });
        });

        const expectedActions = [
            { type: actions.REQUEST_USERS }, { users: users, type: actions.RECEIVE_USERS }
        ];
        const store = mockStore({ users: [] });

        return store.dispatch(getUsers()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('user get action ', () => {
    const user = {
        id: '1',
        firstName: 'James',
        lastName: 'Bond',
        email: 'marge@thesimpsons.com',
        mobile: '002001234567890'
    };

    beforeEach(() => {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates RECEIVE_USER when fetching user has been done', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { user: user },
            });
        });
        const expectedActions =
            [{ type: actions.REQUEST_USER }, { type: actions.RECEIVE_USER, user: user }]
            ;
        const store = mockStore({ user: {} });

        return store.dispatch(getUser('1')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('create user action ', () => {
    const user = {
        id: '1',
        firstName: 'James',
        lastName: 'Bond',
        email: 'marge@thesimpsons.com',
        mobile: '002001234567890'
    };

    beforeEach(() => {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates user when post user has been done', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200
            });
        });

        const expectedActions =
            [{ type: actions.REQUEST_USER_ADD }, { type: actions.RECEIVE_USER_ADD }];
        const store = mockStore({ user: {} });

        return store.dispatch(createUser(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('create user action failure', () => {
    const user = Mock.userMock;
    const errorResp = {
        status: 422,
        response: { data: { message: 'Error Code - 422 - Test' } }
    };
    beforeEach(() => {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates user when post user has been done', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.reject(errorResp);
        });

        const expectedActions =
            [{ type: actions.REQUEST_USER_ADD }, { type: actions.RECEIVE_FAILURE, error: 'Error Code - 422 - Test' }];
        const store = mockStore({ user: Mock.userMock });

        return store.dispatch(createUser(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('delete user action ', () => {
    const user = Mock.userMock;
    beforeEach(() => {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('delete user when fetch user has been done', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: { user: user },
            });
        });

        const expectedActions =
            [{ type: actions.REQUEST_USER_DELETE }, { type: actions.RECEIVE_USER_DELETE }];
        const store = mockStore({ user: {} });

        return store.dispatch(removeUser('1')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('error action  for users', () => {
    const errorResp = {
        status: 422,
        response: { data: { message: 'Unprocessable Entity' } }
    };
    beforeEach(() => {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates RECEIVE_USERS when fetching users has been done', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.reject(errorResp);
        });
        const expectedActions = [
            { type: actions.REQUEST_USERS }, { type: actions.RECEIVE_FAILURE, error: 'Unprocessable Entity' }
        ];
        const store = mockStore(Mock.usersMock);

        return store.dispatch(getUsers()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('error action for user', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates RECEIVE_USER when fetching users has been done', () => {
        const errorResp = {
            status: 422,
            response: { data: { message: 'Error Code - 422 - Test' } }
        };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.reject(errorResp);
        });
        const expectedActions = [
            { type: actions.REQUEST_USER }, { type: actions.RECEIVE_FAILURE, error: 'Error Code - 422 - Test' }
        ];
        const store = mockStore(Mock.userMock);

        return store.dispatch(getUser('1')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
describe('error action for user delete', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates REQUEST_USER_DELETE when fetching users has been done', () => {
        const errorResp = {
            status: 422,
            response: { data: { message: 'Error Code - 422' } }
        };
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.reject(errorResp);
        });
        const expectedActions = [
            { type: actions.REQUEST_USER_DELETE }, { type: actions.RECEIVE_FAILURE, error: 'Error Code - 422' }
        ];
        const store = mockStore(Mock.userMock);

        return store.dispatch(removeUser('1')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});