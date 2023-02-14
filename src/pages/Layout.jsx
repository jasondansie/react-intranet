import React from 'react';
import { useSelector } from 'react-redux';
import AdminConsole from '../components/AdminConsole';
import Login from '../components/Login';
import Login2 from '../components/Login2';


const Layout = () => {
    const userD = useSelector((state) => state.user.userInfo);
    const authenticated = useSelector((state) => state.user.isAuthenticated);

    console.log("auth:", authenticated);
    console.log("user2: ", userD);

    return (
        <div>
            {
                !authenticated ? (<Login2 />) : (<AdminConsole />)
            }
        </div >
    );
};

export default Layout;