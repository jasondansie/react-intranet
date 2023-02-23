import React from 'react';
import MenuItem from './MenuItem';
import classes from './Sidemenu.module.css'

const SideMenu = ({image, name}) => {
    let imageUrl = `./images/${image}`
    return (
        <div>
            <div className={classes.user}>
                <img className={classes.roundImage} src={imageUrl} alt={name} />
                <h4>{name}</h4>
            </div>
            <div className={classes.menulist}>
                <ul>
                    <li>
                        <MenuItem
                            name="DashBoard"
                            icon="fa fa-clock-o"
                            hrefLink="/home"
                         />
                    </li>
                    
                </ul>

            </div>
        </div>
        
    );
};

export default SideMenu;