import axios from 'axios';
import { API_URL } from '@env';
import userTypes from './actionTypes';

export default function logIn(body) {
  return async (dispatch) => {
    try {
      const data = await axios.post(`${API_URL}/login`, body);
      dispatch({
        type: userTypes.LOGIN_USER,
        data,
      });
    } catch (error) {

    }
  };
}
