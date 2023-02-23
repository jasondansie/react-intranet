import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './MenuItem.module.css'


function MenuItem({icon, name, hrefLink}) {
    const navigation = useNavigate();

    const onclickHandler = () => {
            navigation(hrefLink);
    }

    return (
        <div className={classes.menuItem}>
            <a onClick={onclickHandler} href="http://">
                <i className={icon}></i>
                <span>{name}</span>
            </a>      
        </div>
    )
}

export default MenuItem

