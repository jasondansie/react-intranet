import React from 'react';
import classes from './BasicTable.module.css'

const BasicTable = ({ title, users }) => {

    const [columns, userData] = users;

    return (
        <div className={classes.tabletop}>
            <div className={classes.heading}>
                <h3>{title}</h3>
            </div>
            <div className={classes.basictable}>
                <table>
                    <thead>                          
                        <tr>
                            <th>{columns[0]}</th>
                            <th>{columns[1]}</th>
                            <th>{columns[2]}</th>
                            <th>{columns[7]}</th>
                            <th>{columns[3]}</th>
                            <th>{columns[9]}</th>
                        </tr>                         
                    </thead>
                    <tbody>                                           
                        {userData.map((user, index) => {                     
                            return (
                                <tr key={index}>  
                                    <th key={user.id}>{user.id}</th>
                                    <th>{user.firstname}</th>
                                    <th>{user.lastName}</th>
                                    <th>{user.accessId}</th>
                                    <th>{user.email}</th>
                                    <th>{user.position}</th>
                                </tr>                                      
                            )                     
                        })}                  
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BasicTable;