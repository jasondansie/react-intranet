import React from 'react';
import classes from './Login.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { isLoading } from './features/UserSlice.js';


const Login = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.isLoading);

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");


    const ShowSpinner = () => {
        if (loading) {
            return <div className={classes.spinner} >
                <div className={classes.head}></div>
            </div>
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(isLoading(true));
        dispatch(login({ email, pwd }));
        dispatch(isLoading(false));
    }

    return (
        <div className={classes.login}>
            <div className={classes.container}>

                <div className={classes.logo}>
                    <div className='companyLogo'>
                        <img src="https://www.goodcall.fi/wp-content/uploads/2021/05/logo2.png" alt="" />
                    </div>
                </div>
                <div className={classes.showSpinner}>
                   {loading && <ShowSpinner />}
                </div>
                <div className={classes.loginMain}>
                    <form action="">
                        <div className={classes.sect1}>
                            <label htmlFor="email">E-mail</label>
                            <input className={classes.formInput} type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={classes.password}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className={classes.formInput} placeholder='Password' onChange={(e) => setPwd(e.target.value)} />
                        </div>
                        <div className={classes.selectors}>
                            <div className={classes.remember}>
                                <input type="checkbox" name="rememberN" className={classes.rememberCheck} />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="http://" >Forgot Password?</a>
                        </div>
                        <button type="submit" onClick={(e) => submitHandler(e)}>Login</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;