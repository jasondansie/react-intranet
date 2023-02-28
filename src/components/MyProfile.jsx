import React from 'react';
import { useSelector } from 'react-redux';
import classes from './MyProfile.module.css'
import PageHeading from './PageHeading';

const MyProfile = () => {
    const userData = useSelector((state) => state.user.userData);

    return (
        <div className={classes.MyProfile}>
            <PageHeading
                title="Profile"
            />
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
                        <ul>
                            <li><i className={classes.info} className="fa fa-envelope-o"></i> :  {userData.email}</li>
                            <li><i className="fa fa-phone"></i> :  phoneNumber</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;