import React from 'react';
import classes from './SingleStatBox.module.css'


const SingleStatBox = ({ icon, description, stats }) => {
    return (
        <div className={classes.container}>
            <i class={icon}></i>
            <h3>{description}</h3>
            <h3>{stats}</h3>

        </div>
    );
};

export default SingleStatBox;