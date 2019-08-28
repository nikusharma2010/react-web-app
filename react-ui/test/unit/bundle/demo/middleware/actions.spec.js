
import { getUsers, getUser, createUser, removeUser } from '../../../../../src/bundle/demo/middleware/actions';
import * as actions from '../../../../../src/bundle/demo/middleware/constants';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as Mock from '../data/data';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const API_URL = 'http://localhost:3070';

describe('user list action ', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates RECEIVE_USERS when fetching users has been done', () => {
        fetchMock.getOnce(API_URL + '/users', {
            body: { users: [] },
            status: 200,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [
            { type: actions.REQUEST_USERS }, { users: [], type: actions.RECEIVE_USERS }
        ];
        const store = mockStore({ users: [] });

        return store.dispatch(getUsers()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});

describe('user get action ', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates RECEIVE_USER when fetching user has been done', () => {
        fetchMock.getOnce(API_URL + '/user/1', {
            body: { user: {} },
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions =
            [{ type: actions.REQUEST_USER }, { type: actions.RECEIVE_USER, "user": {} }]
            ;
        const store = mockStore({ user: {} });

        return store.dispatch(getUser('1')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
describe('create user action ', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates user when post user has been done', () => {
        fetchMock.post(API_URL + '/user', {
            method: 'POST',
            body: { user: {} },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const expectedActions =
            [{ type: actions.REQUEST_USER_ADD }, { type: actions.RECEIVE_USER_ADD }];
        const store = mockStore({ user: {} });
        const user = {};

        return store.dispatch(createUser(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
describe('create user action failure', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates user when post user has been done', () => {
        fetchMock.post(API_URL + '/user', {
            body: { message: 'Test', statusCode: 422 },
            status: 422
        });

        const expectedActions =
            [{ type: actions.REQUEST_USER_ADD }, { type: actions.RECEIVE_FAILURE, error: 'Error Code - 422 - Test' }];
        const store = mockStore({ user: Mock.userMock });
        const user = Mock.userMock;

        return store.dispatch(createUser(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
describe('delete user action ', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('delete user when fetch user has been done', () => {
        fetchMock.delete(API_URL + '/user/1', {

            method: 'DELETE',
            body: {}
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
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates RECEIVE_USERS when fetching users has been done', () => {
        fetchMock.getOnce(API_URL + '/users', {
            body: { message: 'Test', statusCode: 422 },
            status: 422
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
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates RECEIVE_USER when fetching users has been done', () => {
        fetchMock.getOnce(API_URL + '/user/1', {
            body: { message: 'Test', statusCode: 422 },
            status: 422,
            headers: { 'content-type': 'application/json' }
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
