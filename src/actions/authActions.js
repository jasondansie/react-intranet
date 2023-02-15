import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const login = (userData) => async (dispatch) => {
  try {
    console.log("getting info");
    const res = await axios.post('http://localhost:5000/getSingleUser', userData);
    console.log(res.data);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
  }
};
