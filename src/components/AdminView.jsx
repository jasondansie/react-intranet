import React from 'react';
import AdminMenu from './AdminMenu';

const AdminView = () => {
    return (
        <div>
            <AdminMenu
                    image={"Jason.jpg"}
                    name={"Jason Dansie"}
                 />
            <h2>AdimView</h2>
        </div>
    );
};

export default AdminView;