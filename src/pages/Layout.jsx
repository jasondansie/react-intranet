import React from 'react';
import { useSelector } from 'react-redux';
import AdminConsole from '../components/AdminConsole';
import Login from '../components/Login';


const Layout = () => {
    const authenticated = useSelector((state) => state.user.isAuthenticated);

    return (
        <div>
            {
                !authenticated ? (<Login />) : (<AdminConsole />)
            }
        </div >
    );
};

export default Layout;