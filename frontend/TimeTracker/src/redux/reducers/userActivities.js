import loginActions from '../actions/actionTypes';

function userActivities(Activities = [], action) {
  let newActivities = Activities;
  switch (action.type) {
    case loginActions.LOAD_USER_ACTIVITIES:
      newActivities = {
        ...action.data,
        isAuthenticated: true,
      };
      break;
    default:
      break;
  }
  return newActivities;
}

export default userActivities;
