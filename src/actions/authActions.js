import axios from 'axios';
import { addToken } from '../components/features/UserSlice';

export const login = (userData) => async (dispatch) => {
  try {
    console.log("getting info");
    const res = await axios.post('http://localhost:5000/autorizeUser', userData);
    const token = res.data.token;
    console.log("raw token: ", token);
    localStorage.setItem('token', token);
    dispatch(addToken(token)); 
  } catch (err) {
    console.error(err);
  }
};
