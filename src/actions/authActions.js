import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import { addToken } from '../components/features/UserSlice';

export const login = (userData) => async (dispatch) => {
  try {
    console.log("getting info");
    const res = await axios.post('http://localhost:5000/autorizeUser', userData);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(addToken(res.data)); 
     dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
     dispatch({ type: LOGIN_FAIL });
  }
};
