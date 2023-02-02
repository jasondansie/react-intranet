import React from 'react';
import classes from './Login.module.css'

const Login = () => {
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
                            <input type="email" name="email" id="email" placeholder='E-mail' />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder='Password' />
                        </div>
                        <div className={classes.selectors}>
                            <div className='remember'>

                                <input type="checkbox" name="remember" id="remember" />
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

export default Login;