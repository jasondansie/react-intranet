import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './AdminMenu.module.css'

const AdminMenu = ({image, name}) => {
    const navigation = useNavigate();
    let imageUrl = `./images/${image}`;

    const changeHandler = (e) => {
            console.log("clicked");
            if(e.target.value === "myprofile"){
                navigation("/myprofile");    
            }else if(e.target.value === "Info"){
                navigation("/info");
            }else{
                navigation("/logout");
            }
    }

    return (
        <div className={classes.adminNav}>
            <div className={classes.hamgergerMenu}>
                <button type="button" id="sidebarCollapse" className={classes.sidebar_toggle}>
                <i className="fa fa-bars"></i></button>
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
                <select name="selection" id="selection" onChange={(e) => changeHandler(e)}>
                    <option value={name} hidden>{name}</option>
                    <option value="myprofile">My Profile</option>
                    <option value="Info">Info</option>
                    <option value="Logout">Logout</option>                  
                </select>
            </div>            
        </div>
    );
};

export default AdminMenu;