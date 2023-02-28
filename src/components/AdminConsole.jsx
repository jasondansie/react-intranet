import React, { useEffect } from 'react';
import axios from 'axios';
import classes from './AdminConsole.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { loadUserData } from './features/UserSlice.js';
import Sidemenu from './SideMenu'
import AdminMenu from './AdminMenu'
import Main from './Main'


const AdminConsole = () => {

    const dispatch = useDispatch();

    const userData = useSelector((state) => state.user.userData);
    const userToken = useSelector((state) => state.user.userToken);

   
    useEffect(() => {
        axios.get('http://localhost:5000/getUserById', {
            headers: {
                Authorization: userToken
            }
        })
            .then(response => {
                dispatch(loadUserData(response.data));
            })
            .catch(error => {
                console.error(error);
            });
    }, [dispatch, userToken]);
    
   
    return (
        <div className={classes.adminconsole}>                 
            <aside className={classes.sidemenu}>
                <Sidemenu
                    name={`${userData.firstName} ${userData.lastName}`}
                    image={userData.photoFilename}
                />
            </aside>
            <div className={classes.mainitems}>

                <div className={classes.topmenu}>
                    <AdminMenu
                        userName={`${userData.firstName} ${userData.lastName}` }
                        image={userData.photoFilename}
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