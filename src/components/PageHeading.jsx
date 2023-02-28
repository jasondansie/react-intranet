import React from 'react';
import classes from './PageHeading.module.css'


const PageHeading = ({ pageTitle }) => {
    

    return (
        <div className={classes.pageHeading}>
            <h2>{pageTitle}</h2>
        </div>
    );

    
};



export default PageHeading;