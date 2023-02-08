import React from 'react';
import AdminMenu from '../components/AdminMenu';
import Main from '../components/Main';
import SideMenu from '../components/SideMenu';
import classes from './Layout.module.css'

const layout = () => {
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

export default layout;