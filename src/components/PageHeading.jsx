import React from 'react';
import classes from './PageHeading.module.css'

const PageHeading = ({ title }) => {
    return (
        <div className={classes.pageHeading}>
            <h2>{title}</h2>
        </div>
    );
};

export default PageHeading;