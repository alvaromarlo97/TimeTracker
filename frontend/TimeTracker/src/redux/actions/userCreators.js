/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { API_URL } from '@env';
import userTypes from './actionTypes';

export default function logInUser(body) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${API_URL}/login`, body);
      dispatch({
        type: userTypes.LOGIN_USER,
        data,
      });
    } catch (error) {
      console.log(error);
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
      console.log(error);
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
      console.log(error);
    }
  };
}
export function LoadUserInfo(access_token, userId) {
  return async (dispatch) => {
    try {
      const { datos } = await axios.post(`${API_URL}/api/user/${userId}`, {
        Headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      dispatch({
        type: userTypes.LOAD_USER,
        datos,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function SubmitTime(activityId, body) {
  return async (dispatch) => {
    try {
      console.log('oo');
      console.log(body);
      const { data } = await axios.put(`${API_URL}/api/activity/${activityId}`,
        {
          type: 'timeUpdate',
          data:
            body,

        });
      dispatch({
        type: userTypes.LOAD_ACTIVITY,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
