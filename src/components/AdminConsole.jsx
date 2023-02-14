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
            {userData.map((user) => {
                return (
                    <div>
                        <aside className={classes.sidemenu}>
                            <SideMenu
                                image={user.photofilename}
                                name={`${user.firstname} ${user.lastname}`}
                            />
                        </aside>
                        <div className={classes.mainitems}>

                            <div className={classes.topmenu}>
                                <AdminMenu
                                    image={user.photofilename}
                                    name={`${user.firstname} ${user.lastname}`}
                                />
                            </div>
                            <div className={classes.maincontent}>
                                <Main />
                            </div>
                        </div>   
                    </div>        
                )
            })}     
        </div>
    );
};

export default AdminConsole;