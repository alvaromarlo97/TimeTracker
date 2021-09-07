import loginActions from '../actions/actionTypes';

function loadActivity(ActivityId = [], action) {
  let newActivityId = ActivityId;
  switch (action.type) {
    case loginActions.LOAD_ACTIVITY:
      newActivityId = {
        ...action.data,
        isAuthenticated: true,
      };
      break;
    default:
      break;
  }

  return newActivityId;
}

export default loadActivity;
