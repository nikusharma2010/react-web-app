import * as constant from './constants';
import * as Service from './rest.service';
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
        dispatch(requestUsers());
        const response = await Service.fetchUsers();
        if (response.status === 200) {
            let users = await response.json();
            dispatch(receiveUsers(users));
        } else {
            let errorMessage = response.statusText;
            dispatch(receiveError(errorMessage));
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
        dispatch(requestUser());
        const response = await Service.fetchUser(id);
        if (response.status === 200) {
            let user = await response.json();
            dispatch(receiveUser(user));
        } else {
            let error = await response.json();
            let errorMessage = 'Error Code - ' + error.statusCode + ' - ' + error.message;
            dispatch(receiveError(errorMessage));
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
        dispatch(requestAddUser());
        const response = await Service.addUser(user);
        if (response.status === 200) {
            await response.json();
            dispatch(receiveAddUser());
        } else {
            let error = await response.json();
            let errorMessage = 'Error Code - ' + error.statusCode + ' - ' + error.message;
            dispatch(receiveError(errorMessage));
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
    return dispatch => {
        dispatch(requestDeleteUser());
        return Service.deleteUser(id).then(dispatch(receiveDeleteUser()));
    };
};
