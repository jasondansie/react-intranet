import React from 'react';
import classes from './Login.module.css'
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("user", user);

        axios.get(`http://localhost:5000/getUser/${user}`)
            .then(
                (res) => {
                    console.log("data", res.data);
                    setData(res.data);
                });
    }

    const changeHandler = (e) => {
        if (e.target.name === "email") {
            setUser(e.target.value);
        }
        else {
            setPwd(e.target.value);
        }
    }

    return (
        <div className={classes.login}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <div className='companyLogo'>
                        <img src="https://www.goodcall.fi/wp-content/uploads/2021/05/logo2.png" alt="" />
                    </div>

                </div>
                <div className={classes.loginMain}>
                    <form action="">
                        <div className=''>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => changeHandler(e)} />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Password' onChange={(e) => changeHandler(e)} />
                        </div>
                        <div className={classes.selectors}>
                            <div className='remember'>
                                <input type="checkbox" name="remember" id="remember" />
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