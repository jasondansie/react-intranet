import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import classes from './Login.module.css'

const Login2 = () => {
    console.log("login2 loaded");
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

    return (
        <div className={classes.login}>
            <div className={classes.container}>

                <div className={classes.logo}>
                    <div className='companyLogo'>
                        <img src="https://www.goodcall.fi/wp-content/uploads/2021/05/logo2.png" alt="" />
                    </div>

                </div>
                <div className={classes.loginMain}>
                    <form onSubmit={submitHandler}>
                        <div className={classes.sect1}>
                            <label htmlFor="email">E-mail</label>
                            <input className={classes.formInput} type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.password}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className={classes.formInput} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className={classes.selectors}>
                            <div className={classes.remember}>
                                <input type="checkbox" name="rememberN" className={classes.rememberCheck} />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="http://" >Forgot Password?</a>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login2;