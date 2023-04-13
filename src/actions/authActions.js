import axios from 'axios';
import { addToken, isAuthenticated } from '../components/features/UserSlice';

export const login = (userData) => async (dispatch) => {

  console.log("userData", userData);
  try {
    const res = await axios.post('http://localhost:5000/authorizeUser ', userData);
    
    const token = res.data;
    console.log("token", token);
    localStorage.setItem('token', token);
    dispatch(addToken(token)); 
    dispatch(isAuthenticated(true));
  } catch (err) {
    console.error(err);
    dispatch(isAuthenticated(false));
  }
};