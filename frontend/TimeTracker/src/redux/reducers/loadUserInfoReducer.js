import loginActions from '../actions/actionTypes';

function loadUserInfoReducer(UserInfo = [], action) {
  let newUserInfo = UserInfo;
  switch (action.type) {
    case loginActions.LOAD_USER:
      newUserInfo = {
        ...action.data,
        isAuthenticated: true,
      };
      break;
    default:
      break;
  }
  console.log(newUserInfo);

  return newUserInfo;
}

export default loadUserInfoReducer;
