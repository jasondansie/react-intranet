import React from 'react';
import { useSelector } from 'react-redux';
import AdminConsole from '../components/AdminConsole';
import Login from '../components/Login';


const Layout = () => {
    const userD = useSelector((state) => state.user.userInfo);
    const authenticated = useSelector((state) => state.user.isAuthenticated);

    console.log("auth:", authenticated);
    console.log("user2: ", userD);

    return (
        <div>
            {
                !authenticated ? (<Login />) : (<AdminConsole />)
            }
        </div >
    );
};

export default Layout;