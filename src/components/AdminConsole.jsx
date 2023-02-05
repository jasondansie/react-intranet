import React from 'react';
import AdminView from './AdminView';
import SideMenu from './SideMenu';

const AdminConsole = () => {
    return (
        <div>
            <SideMenu />
            <AdminView />
        </div>
    );
};

export default AdminConsole;