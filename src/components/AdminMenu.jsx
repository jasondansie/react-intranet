import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './AdminMenu.module.css'
import { isAuthenticated, isLoading } from '../components/features/UserSlice';
import { useDispatch } from 'react-redux';

const AdminMenu = ({image, userName}) => {
    const navigation = useNavigate();
    let imageUrl = `./images/${image}`;
    const dispatch = useDispatch();

    const changeHandler = (e) => {
            if(e.target.value === "myprofile"){
                navigation("/myprofile");    
            }else if(e.target.value === "Info"){
                navigation("/info");
            }else{
                dispatch(isAuthenticated(false));
                dispatch(isLoading(false));
                navigation("/");
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
                    <img src="https://www.goodcall.fi/wp-content/uploads/2021/05/logo2.png" alt=""/>
                </div>
            </div>  
            <div className={classes.dropDownNav}>
                <img src={imageUrl} alt={userName} className={classes.roundImage} />
                <select name="selection" id="selection" onChange={(e) => changeHandler(e)}>
                    <option value={userName} hidden>{userName}</option>
                    <option value="myprofile">My Profile</option>
                    <option value="Info">Info</option>
                    <option value="Logout">Logout</option>                  
                </select>
            </div>            
        </div>
    );
};

export default AdminMenu;