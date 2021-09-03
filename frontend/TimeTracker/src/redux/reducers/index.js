import { combineReducers } from 'redux';
import loggedUser from './loginUserReducer';
import registerUser from './registerUserReducer';

export default combineReducers({
  loggedUser,
  registerUser,
});
