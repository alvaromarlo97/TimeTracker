import { combineReducers } from 'redux';
import loggedUser from './loginUserReducer';

export default combineReducers({
  loggedUser,
});
