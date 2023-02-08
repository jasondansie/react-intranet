import React from 'react';
import classes from './AdminMenu.module.css'

const AdminMenu = ({image, name}) => {
    let imageUrl = `./images/${image}`;

    return (
        <div className={classes.adminNav}>
            <div className={classes.hamgergerMenu}>
                <button type="button" id="sidebarCollapse" class={classes.sidebar_toggle}>
                <i class="fa fa-bars"></i></button>
            </div>  
            <div className={classes.mainNav}>
                <div className={classes.logo}>
                    <div className='companyLogo'>
                        <img src="https://www.goodcall.fi/wp-content/uploads/2021/05/logo2.png" alt="" />
                    </div>
                </div>
            </div>  
            <div className={classes.dropDownNav}>
                <img src={imageUrl} alt={name} />
                <select name="selection" id="selection">
                    <option value={name} selected hidden>{name}</option>
                    <option value="My Profile">My Profile</option>
                    <option value="Info">Info</option>
                    <option value="Logout">Logout</option>                  
                </select>
            </div>            
        </div>
    );
};

export default AdminMenu;