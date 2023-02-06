import React from 'react';
import AdminView from './AdminView';
import SideMenu from './SideMenu';
import classes from './AdminConsole.module.css'

const AdminConsole = () => {
    return (
        <div className={classes.adminconsole}>
            <div className={classes.sidemenu}>
                <SideMenu />
            </div>
            <div className={classes.adminview}>
                <AdminView />
            </div>
        </div>
    );
};

export default AdminConsole;