import React from 'react';
import classes from './MultiStatBox.module.css'

const MultiStatBox = ({icon,text1, text2, num1, num2}) => {
    const boxColors = ['#3b5998','#00aced', '#0077B5', '#d34836']
    return (
        <div className={classes.container}>
            <div className={classes.colorblock}>
            <i className={icon}></i>
            </div>
            <div className={classes.infoblock}>
                <div className={classes.text1block}>
                    <h3>{text1}</h3>
                    <h3>{num1}</h3>
                </div>
                <div className={classes.text2block}>
                <h3>{text2}</h3>
                <h3>{num2}</h3>
                </div>
            </div>           
        </div>
    );
};

export default MultiStatBox;