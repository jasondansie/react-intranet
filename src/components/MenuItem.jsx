import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MenuItem.module.css'


function MenuItem({ icon, name, link }) {
    
    return (
        <div className={classes.menuItem}>
           
          
            <i className={icon}></i>
                <span>
                    <button><NavLink to={link}>{name}</NavLink></button>
                </span>
        </div>
    )
}

export default MenuItem

