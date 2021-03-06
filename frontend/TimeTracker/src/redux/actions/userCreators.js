/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { API_URL } from '@env';
import userTypes from './actionTypes';

export function UserActivities(userId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/user/${userId}`);

      dispatch({
        type: userTypes.LOAD_USER_ACTIVITIES,
        data,
      });
    } catch (error) {
      return error.message;
    }
  };
}
export function logOutUser() {
  return (dispatch) => {
    try {
      dispatch({
        type: userTypes.LOGOUT_USER,
      });
    } catch (error) {
      return error.message;
    }
  };
}
export default function logInUser(body) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/login`, body);
      dispatch({
        type: userTypes.LOGIN_USER,
        data,
      });
    } catch (error) {
      return error.message;
    }
  };
}
export function RegisterUser(body) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/register`, body);
      dispatch({
        type: userTypes.REGISTER_USER,
        data,
      });
    } catch (error) {
      return error.message;
    }
  };
}
export function loadCurrentActivity(activityId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${API_URL}/api/activity/${activityId.currentActivityId}`);

      dispatch({
        type: userTypes.LOAD_ACTIVITY,
        data,
      });
    } catch (error) {
      return error.message;
    }
  };
}
export function LoadUserInfo(access_token, userId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/user/${userId}`, {
        Headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      dispatch({
        type: userTypes.LOAD_USER,
        data,
      });
    } catch (error) {
      return error.message;
    }
  };
}
export function SubmitTime(activityId, body, newTotalTime, userId) {
  return async (dispatch) => {
    try {
      await axios.put(`${API_URL}/api/activity/${activityId}`,
        {
          type: 'timeUpdate',
          data:
            body,

        });
      const { data } = await axios.put(`${API_URL}/api/activity/${activityId}`,
        {
          type: 'activityUpdate',
          data: { totalTime: newTotalTime },
        });
      dispatch({
        type: userTypes.LOAD_ACTIVITY,
        data,
      });
      dispatch(UserActivities(userId));
    } catch (error) {
      return error.message;
    }
  };
}
export function CreateNewActivity(userId, body) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/api/activity`, body);
      dispatch({
        type: userTypes.CREATE_ACTIVITY,
        data,
      });
      await axios.put(`${API_URL}/api/user/${userId}`, {
        activities: data._id,
      });
      dispatch(UserActivities(userId));
    } catch (error) {
      return error.message;
    }
  };
}
export function deleteActivity(userId, body) {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}/api/user/${userId}`,
        {
          data: body,
        });
      // await fetch(`${API_URL}/api/user/${userId}`, {
      //   body: JSON.stringify(body),
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      dispatch(UserActivities(userId));
    } catch (error) {
      return error.message;
    }
  };
}
