import loginActions from '../actions/actionTypes';

function loginUserReducer(loggedUser = {
  isAuthenticated: false,
}, action) {
  let newLoggedUser = loggedUser;
  switch (action.type) {
    case loginActions.LOGIN_USER:
      newLoggedUser = {
        ...action.data,
        isAuthenticated: true,
      };
      break;
    case loginActions.LOAD_USER_ACTIVITIES:
      newLoggedUser = {
        ...newLoggedUser,
        user: action.data,
      };
      break;
    default:
      break;
  }
  console.log(newLoggedUser);
  return newLoggedUser;
}

export default loginUserReducer;
