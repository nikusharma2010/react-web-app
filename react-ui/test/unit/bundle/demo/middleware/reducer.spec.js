import * as types from '../../../../../src/bundle/demo/middleware/constants';
import userReducer from '../../../../../src/bundle/demo/middleware/reducer';
import * as Mock from '../data/data';

describe('userReducer reducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(undefined, {})).toEqual(Mock.initialStateMock);
    });
    it('should handle REQUEST_USERS', () => {
        expect(
            userReducer([], {
                type: types.REQUEST_USERS
            })
        ).toEqual(
            { isLoading: true }
        );
    });
    it('should handle RECEIVE_FAILURE', () => {
        expect(
            userReducer([], {
                type: types.RECEIVE_FAILURE,
                error: 'Error',
                isLoading: false
            })
        ).toEqual(
            { error: 'Error', isLoading: false }
        );
    });
    it('should handle RECEIVE_USERS', () => {
        expect(
            userReducer([], {
                type: types.RECEIVE_USERS,
                users: Mock.usersMock,
                isLoading: false
            })
        ).toEqual(
            {
                users: Mock.usersMock,
                isLoading: false
            }
        );
    });
    it('should handle REQUEST_USER', () => {
        expect(
            userReducer([], {
                type: types.REQUEST_USER,
                isLoading: false
            })
        ).toEqual(
            { isLoading: true }
        );
    });
    it('should handle RECEIVE_USER', () => {
        expect(
            userReducer([], {
                type: types.RECEIVE_USER,
                user: Mock.userMock,
                isLoading: true
            })
        ).toEqual(
            {
                user: Mock.userMock,
                isLoading: false
            }
        );
    });
    it('should handle REQUEST_USER_ADD', () => {
        expect(
            userReducer([], {
                type: types.REQUEST_USER_ADD
            })
        ).toEqual(
            {}
        );
    });
    it('should handle RECEIVE_USER_ADD', () => {
        expect(
            userReducer([], {
                type: types.RECEIVE_USER_ADD,
                created: true
            })
        ).toEqual(
            {
                created: true
            }
        );
    });
    it('should handle REQUEST_USER_DELETE', () => {
        expect(
            userReducer([], {
                type: types.REQUEST_USER_DELETE
            })
        ).toEqual(
            {}
        );
    });
    it('should handle RECEIVE_USER_DELETE', () => {
        expect(
            userReducer([], {
                type: types.RECEIVE_USER_DELETE,
                deleted: true
            })
        ).toEqual(
            {
                deleted: true
            }
        );
    });

});