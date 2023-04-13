import React from 'react';
import MenuItem from './MenuItem';
import classes from './Sidemenu.module.css'

const SideMenu = ({ image, name, accessid }) => {
    let imageUrl = `./images/${image}`;
    let role = "";
    console.log("accessid", accessid);

    switch (accessid) {
        case 1:
            role = "admin"
            break;
        case 2:
            role = "manager"
            break;

        default:
            role = "user"
            break;
    }

    return (
        <div>
            <div className={classes.user}>
                <img className={classes.roundImage} src={imageUrl} alt={name} />
                <h4>{name}</h4>
            </div>
            <div className={classes.role}>
                <h2>{role}</h2>
            </div>
            <div className={classes.menulist}>
                <ul>
                    <li>
                        <MenuItem
                            name="DashBoard"
                            icon="fa fa-clock-o"
                            link="/home"
                        />
                    </li>

                </ul>

            </div>
        </div>

    );
};

export default SideMenu;