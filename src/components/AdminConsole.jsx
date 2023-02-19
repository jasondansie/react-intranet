import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import SideMenu from './SideMenu';
import classes from './AdminConsole.module.css'
import { useSelector } from 'react-redux';
import AdminMenu from './AdminMenu';
import Main from './Main';

const AdminConsole = async () => {

    const [userData, setUserData] = useState();

    const userToken = useSelector((state) => state.user.userToken);

    console.log("token:", userToken);

    const authHeader = () => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.accessToken) {
            // for Node.js Express back-end
            return { 'x-access-token': user.accessToken };
        } else {
            return {};
        }
    }

    let token = authHeader();


    axios.get('http://localhost:5000/protected', {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });


    return (
        <div className={classes.adminconsole}>
            {/* <aside className={classes.sidemenu}>
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
            </div> */}
        </div>
    );
};

export default AdminConsole;