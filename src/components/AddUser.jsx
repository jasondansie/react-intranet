import React, { useEffect, useState } from 'react';
import PageHeading from './PageHeading';
import classes from './AddUser.module.css';
import BasicTable from './BasicTable';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const AddUser = () => {
    const [users, setUsers] = useState(null);
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.user.userToken);

    useEffect(() => {
        axios.get('http://localhost:5000/users', {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userToken, dispatch]);
   

    return (
        <div>
        <PageHeading
          pageTitle="Add Users"
        />
        <div className={classes.top}>
          <div className={classes.maincontent}>
            {users && <BasicTable
              title="Current Users"
              users={users}
            />}
          </div>
        </div>
      </div>
    );
};

export default AddUser;