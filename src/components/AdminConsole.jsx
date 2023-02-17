import React from 'react';
import SideMenu from './SideMenu';
import classes from './AdminConsole.module.css'
import { useSelector } from 'react-redux';
import AdminMenu from './AdminMenu';
import Main from './Main';

const AdminConsole = () => {
    const userData = useSelector((state) => state.user.userData);

    console.log("admin:", userData);

    return (
        <div className={classes.adminconsole}>
            <aside className={classes.sidemenu}>
                <SideMenu
                    image={userData.photofilename}
                    name={`${userData.firstname} ${userData.lastname}`}
                />
            </aside>
            <div className={classes.mainitems}>

                <div className={classes.topmenu}>
                    <AdminMenu
                        image={userData.photofilename}
                        name={`${userData.firstname} ${userData.lastname}`}
                    />
                </div>
                <div className={classes.maincontent}>
                    <Main />
                </div>
            </div>
        </div>
    );
};

export default AdminConsole;