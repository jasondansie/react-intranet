import React from 'react';
import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css'

const MyProfile = () => {
    const userData = useSelector((state) => state.user.userData);

    return (
        <div className={classes.MyProfile}>
            <div className={classes.pageHeading}>
                <h2>Profile</h2>
            </div>
            <div className={classes.userProfile}>
                <div className={classes.userHeading}>
                    <h2>User profile</h2>
                </div>
                <div className={classes.profileContent}>
                    <div className={classes.profileImage}>
                        <img className={classes.roundImage} src={`./images/${userData.photoFilename}`} alt={`${userData.firstName} ${userData.lastName}`} />
                    </div>
                    <div className={classes.profileInfo}>
                        <h3>{userData.firstName} {userData.lastName}</h3>
                        <p> <strong>About:</strong> {userData.position}</p>
                        <ul class="list-unstyled">
                            <li><i class="fa fa-envelope-o"></i> :  {userData.email}</li>
                            <li><i class="fa fa-phone"></i> :  phoneNumber</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MyProfile;