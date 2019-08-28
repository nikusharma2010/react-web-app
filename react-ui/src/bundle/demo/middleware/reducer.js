import * as constant from './constants';

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
        return Object.assign({}, state, { isLoading: true });
    }
    case constant.RECEIVE_FAILURE:
    {
        return Object.assign({}, state, {
            error: action.error,
            isLoading: false
        });
    }
    case constant.RECEIVE_USERS:
    {
        return Object.assign({}, state, {
            users: action.users,
            isLoading: false
        });
    }
    case constant.REQUEST_USER:
    {
        return Object.assign({}, state, { isLoading: true });
    }
    case constant.RECEIVE_USER:
    {
        return Object.assign({}, state, {
            user: action.user,
            isLoading: false
        });
    }
    case constant.REQUEST_USER_ADD:
    {
        return Object.assign({}, state, {});
    }
    case constant.RECEIVE_USER_ADD:
    {
        return Object.assign({}, state, {
            created: true
        });
    }
    case constant.REQUEST_USER_DELETE:
    {
        return Object.assign({}, state, {});
    }
    case constant.RECEIVE_USER_DELETE:
    {
        return Object.assign({}, state, {
            deleted: true
        });
    }
    default:
        return state;
    }
};
export default userReducer;