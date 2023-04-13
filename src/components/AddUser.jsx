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

    const [formData, setFormData] = useState({
        firstname: '',
        lastName: '',
        email: '',
        password: '',
        photoFilename: '',
        createdBy: 1,
        accessId: '',
        enabled: 1,
        position: '',
        company: '',
        resetPassword: 0,
        resetPasswordTime: '2023-03-01'
      });

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
   

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/users', formData)
      .then(response => {
        console.log('User created:', response.data);
        // Reset form data
        setFormData({
            firstname: '',
            lastName: '',
            email: '',
            password: '',
            photoFilename: '',
            accessId: '',
            position: '',
            company: '',
        });
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };


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
           
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleInputChange} />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />

                    <label htmlFor="accessId">accessId:</label>
                    <input type="text" id="accessId" name="accessId" value={formData.accessId} onChange={handleInputChange} />

                    

                    <label htmlFor="photoFilename">Photo Filename:</label>
                    <input type="text" id="photoFilename" name="photoFilename" value={formData.photoFilename} onChange={handleInputChange} />

                    <label htmlFor="position">Position:</label>
                    <input type="text" id="position" name="position" value={formData.position} onChange={handleInputChange} />

                    <label htmlFor="company">Company:</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} />

                    <button type="submit">Create User</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddUser;