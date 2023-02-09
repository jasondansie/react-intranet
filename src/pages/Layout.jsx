import React from 'react';
import { useSelector } from 'react-redux';
import AdminMenu from '../components/AdminMenu';
import { userInfo } from '../components/features/UserSlice';
import Main from '../components/Main';
import SideMenu from '../components/SideMenu';
import classes from './Layout.module.css'

const Layout = () => {

    const userD = useSelector(userInfo);
    console.log("data: ", userD);

    return (
        <div className={classes.adminconsole}>
            <aside className={classes.sidemenu}>
                <SideMenu
                    image={"Jason.jpg"}
                    name={"Jason Dansie"}
                />
            </aside>
            <div className={classes.mainitems}>

                <div className={classes.topmenu}>
                    <AdminMenu
                        image={"Jason.jpg"}
                        name={"Jason Dansie"}
                    />
                </div>
                <div className={classes.maincontent}>
                    <Main />
                </div>
            </div>
        </div>

    );
};

export default Layout;