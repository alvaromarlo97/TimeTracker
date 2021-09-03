import loginActions from '../actions/actionTypes';

function registerUserReducer(registeredUser = {
  isRegistered: false,
}, action) {
  let newRegisteredUser = registeredUser;
  switch (action.type) {
    case loginActions.REGISTER_USER:
      newRegisteredUser = {
        ...action.data,
        isRegistered: true,
      };
      break;
    default:
      break;
  }
  console.log(newRegisteredUser);

  return newRegisteredUser;
}

export default registerUserReducer;
