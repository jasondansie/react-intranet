import React from 'react';
import AdminView from './AdminView';
import SideMenu from './SideMenu';
import classes from './AdminConsole.module.css'
import { userInfo }  from './features/UserSlice.js';
import { useSelector } from 'react-redux';

const AdminConsole = () => {
    const userData = useSelector(userInfo);
    console.log("admin:", userData);

    return (
        <div className={classes.adminconsole}>
            <aside className={classes.sidemenu}>
                <SideMenu
                    image={"Jason.jpg"}
                    name={"Jason Dansie"}
                 />
            </aside>
            <div className={classes.adminview}>              
                <AdminView />
            </div>
        </div>
    );
};

export default AdminConsole;