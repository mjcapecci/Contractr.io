import { combineReducers } from 'redux';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import authReducer from './authReducer';
import workerReducer from './workerReducer';
import skillReducer from './skillReducer';

export default combineReducers({
  user: userReducer,
  search: searchReducer,
  auth: authReducer,
  worker: workerReducer,
  skill: skillReducer,
});
