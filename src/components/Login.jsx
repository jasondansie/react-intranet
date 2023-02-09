import React, { useEffect } from 'react';
import classes from './Login.module.css'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo, loadUserData, fetchSingleUser } from './features/UserSlice.js';


const Login = () => {
    const userD = useSelector(userInfo);
    const dispatch = useDispatch();

    let errorMsg = ""


    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");


    let tempUserInfo = `${user}&${pwd}`;


    useEffect(() => {
        dispatch(fetchSingleUser(`getUser/${tempUserInfo}`))
    }, [dispatch, tempUserInfo])


    const submitHandler = (e) => {
        e.preventDefault();
        if (user === "" || pwd === "") {
            alert('user info is empty');
            errorMsg = 'user info is empty'
        }
        else {


            if (userD == "") {
                alert('user info incorrect');
            } else {

                console.log("store:", userD);
                // window.location.href = "/";
            }
            //dispatch(userData)

            // axios.get(`http://localhost:5000/getUser/${tempUserInfo}`)
            //     .then(
            //         (res) => {
            //             console.log("data", res.data);

            //             if (res.data == "") {
            //                 alert('user info incorrect');
            //             } else {
            //                 dispatch(loadUserData(res.data));
            //                 console.log("store:", userData);
            //                 window.location.href = "/";
            //             }
            //         });
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

    const displayErrorText = () => {
        // return userD.map((user) => (
        //     user.userid
        // ))

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
                <p>Data: {errorMsg}</p>
            </div>
        </div>
    );
};

export default Login;