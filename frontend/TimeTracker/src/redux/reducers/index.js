import { combineReducers } from 'redux';
import loggedUser from './loginUserReducer';
import registerUser from './registerUserReducer';
import loadUserInfoReducer from './loadUserInfoReducer';
import loadActivity from './loadActivityReducer';

export default combineReducers({
  loadActivity,
  loggedUser,
  registerUser,
  loadUserInfoReducer,
});
