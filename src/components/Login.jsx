import React from 'react';
import classes from './Login.module.css'
import axios from 'axios';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {
    const [data, setData] = useState([]);
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");


    let userInfo = `${user}&${pwd}`;

    const submitHandler = (e) => {
        e.preventDefault();
        let temp = userInfo.split("&");
        if (temp[0] === "" || temp[1] === "") {
            alert('user info is empty');
        }
        else {
            axios.get(`http://localhost:5000/getUser/${userInfo}`)
                .then(
                    (res) => {
                        console.log("data", res.data);
                        setData(res.data);
                        if (res.data == "") {
                            alert('user info incorrect');
                        } else {
                            window.location.href = "/adminConsole";
                        }
                    });
        }
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
                        <div className={classes.sect1}>
                            <label htmlFor="email">E-mail</label>
                            <input className={classes.formInput} type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => changeHandler(e)} />
                        </div>
                        <div className={classes.password}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className={classes.formInput} placeholder='Password' onChange={(e) => changeHandler(e)} />
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