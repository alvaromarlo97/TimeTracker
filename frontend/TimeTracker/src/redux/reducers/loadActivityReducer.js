import loginActions from '../actions/actionTypes';

function loadActivity(ActivityId = [], action) {
  let newActivityId = ActivityId;
  switch (action.type) {
    case loginActions.LOAD_USER:
      newActivityId = {
        ...action.data,
        isAuthenticated: true,
      };
      break;
    default:
      break;
  }
  console.log(newActivityId);

  return newActivityId;
}

export default loadActivity;
