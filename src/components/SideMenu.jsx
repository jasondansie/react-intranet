import React from 'react';
import classes from './Sidemenu.module.css'

const SideMenu = ({image, name}) => {
    let imageUrl = `./images/${image}`
    return (
        <div>
            <div className={classes.user}>
                <img src={imageUrl} alt={name} />
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default SideMenu;