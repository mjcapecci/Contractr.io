import { combineReducers } from 'redux';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import authReducer from './authReducer';

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  auth: authReducer,
});
