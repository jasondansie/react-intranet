import classes from './Login.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleUser, isLoading, isAuthenticated } from './features/UserSlice.js';


const Login = () => {
    const dispatch = useDispatch();

    const userD = useSelector((state) => state.user.userInfo);
    const loading = useSelector((state) => state.user.isLoading)

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");

    let tempUserInfo = `${user}&${pwd}`;

    const ShowSpinner = () => {
        if (loading) {
            return <div className={classes.spinner} >
                <div className={classes.head}></div>
            </div>
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (user === "" || pwd === "") {
            alert('user info is empty');
        }
        else {
            dispatch(isLoading(true));
            dispatch(fetchSingleUser(`getUser/${tempUserInfo}`));
            console.log("user1: ", userD);
            dispatch(isLoading(false));
            dispatch(isAuthenticated(true));

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

    if (loading) return (<ShowSpinner />)

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