import * as constant from './action-types';

const initialState = {
    isLoading: false,
    error: '',
    user: {},
    users: []
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case constant.REQUEST_USERS:
    {
        return { ...state, isLoading: true, error: '' };
    }
    case constant.RECEIVE_FAILURE:
    {
        return {
            ...state,
            error: action.error,
            isLoading: false
        };
    }
    case constant.RECEIVE_USERS:
    {
        return {
            ...state,
            users: action.users,
            isLoading: false
        };
    }
    case constant.REQUEST_USER:
    {
        return { ...state, isLoading: true, error: '' };
    }
    case constant.RECEIVE_USER:
    {
        return {
            ...state,
            user: action.user,
            isLoading: false
        };
    }
    case constant.REQUEST_USER_ADD:
    {
        return { ...state, error: '' };
    }
    case constant.RECEIVE_USER_ADD:
    {
        return {
            ...state,
            created: true
        };
    }
    case constant.REQUEST_USER_DELETE:
    {
        return { ...state, error: '' };
    }
    case constant.RECEIVE_USER_DELETE:
    {
        return {
            ...state,
            deleted: true
        };
    }
    default:
        return state;
    }
};
export default userReducer;