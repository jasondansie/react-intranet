import React from 'react';
import classes from './BasicTable.module.css'

const BasicTable = ({ title }) => {
    return (
        <div className={classes.tabletop}>
            <div className={classes.heading}>
                <h3>{title}</h3>
            </div>
            <div className={classes.basictable}>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Jason</th>
                            <th>Dansie</th>
                            <th>Owner/IT Guy</th>
                        </tr>
                        <tr>
                            <th>Stina</th>
                            <th>Dansie</th>
                            <th>Owner/CEO</th>
                        </tr>
                        <tr>
                            <th>Sakke</th>
                            <th>Turunen</th>
                            <th>Outsource Partner</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BasicTable;