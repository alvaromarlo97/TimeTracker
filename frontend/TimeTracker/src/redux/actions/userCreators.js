/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { API_URL } from '@env';
import userTypes from './actionTypes';

export default function logInUser(body) {
  return async (dispatch) => {
    console.log(API_URL);
    console.log(`${API_URL}/login`);
    console.log(body);
    try {
      const { data } = await axios.post(`${API_URL}/login`, body);
      console.log(data);
      dispatch({
        type: userTypes.LOGIN_USER,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
