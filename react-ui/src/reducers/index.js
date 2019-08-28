import { combineReducers } from 'redux';
import userReducer from '../bundle/demo/middleware/reducer';

const rootReducer = combineReducers({ userState: userReducer });

export default rootReducer;
