import * as constant from './action-types';
import axios from 'axios';

const SERVICE_API = 'http://localhost:3070';

/** Get List **/
const requestUsers = () => {
    return {
        type: constant.REQUEST_USERS
    };
};
const receiveUsers = (users) => {
    return {
        type: constant.RECEIVE_USERS,
        users: users.users
    };
};
const receiveError = (error) => {
    return {
        type: constant.RECEIVE_FAILURE,
        error: error
    };
};
/** return all User list **/
export const getUsers = () => {
    return async dispatch => {
        try {
            dispatch(requestUsers());
            const res = await axios.get(SERVICE_API + '/users');
            dispatch(receiveUsers(res.data));
        } catch (error) {
            dispatch(receiveError(error.response.data.message));
        }
    };
};

/** Get User **/
const requestUser = () => {
    return {
        type: constant.REQUEST_USER
    };
};

const receiveUser = (json) => {
    return {
        type: constant.RECEIVE_USER,
        user: json.user
    };
};
/** return all User list **/
export const getUser = (id) => {
    return async dispatch => {
        try {
            dispatch(requestUser());
            const res = await axios.get(SERVICE_API + '/user/' + id);
            dispatch(receiveUser(res.data));
        } catch (error) {
            dispatch(receiveError(error.response.data.message));
        }
    };
};
/** Add User **/
const requestAddUser = () => {
    return {
        type: constant.REQUEST_USER_ADD
    };
};

const receiveAddUser = () => {
    return {
        type: constant.RECEIVE_USER_ADD
    };
};
/** return all User list **/
export const createUser = (user) => {
    return async dispatch => {
        try {
            dispatch(requestAddUser());
            const res = await axios.post(SERVICE_API + '/user/', user);
            dispatch(receiveAddUser(res.data));
        } catch (error) {
            dispatch(receiveError(error.response.data.message));
        }
    };
};
/** Delete User **/
const requestDeleteUser = () => {
    return {
        type: constant.REQUEST_USER_DELETE
    };
};

const receiveDeleteUser = () => {
    return {
        type: constant.RECEIVE_USER_DELETE,
    };
};
/** return all User list **/
export const removeUser = (id) => {
    return async dispatch => {
        try {
            dispatch(requestDeleteUser());
            const res = await axios.delete(SERVICE_API + '/user/' + id);
            dispatch(receiveDeleteUser(res.data));
        } catch (error) {
            dispatch(receiveError(error.response.data.message));
        }
    };
};
