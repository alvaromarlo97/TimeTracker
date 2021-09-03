import { combineReducers } from 'redux';
import loggedUser from './loginUserReducer';
import registerUser from './registerUserReducer';
import loadUserInfoReducer from './loadUserInfoReducer';

export default combineReducers({
  loggedUser,
  registerUser,
  loadUserInfoReducer,
});
