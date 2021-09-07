import { combineReducers } from 'redux';
import loggedUser from './loginUserReducer';
import registerUser from './registerUserReducer';
import loadUserInfoReducer from './loadUserInfoReducer';
import loadActivity from './loadActivityReducer';
import userActivities from './userActivities';

export default combineReducers({
  userActivities,
  loadActivity,
  loggedUser,
  registerUser,
  loadUserInfoReducer,
});
