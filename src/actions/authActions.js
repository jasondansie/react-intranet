import axios from 'axios';
import { addToken } from '../components/features/UserSlice';

export const login = (userData) => async (dispatch) => {
  try {
   
    const res = await axios.post('http://localhost:5000/autorizeUser', userData);
    const token = res.data.token;
    console.log("data", res.data);
    localStorage.setItem('token', token);
    dispatch(addToken(token)); 
  } catch (err) {
    console.error(err);
  }
};