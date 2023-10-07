import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>

            <Outlet></Outlet>
        </div>
    );
};

export default Root;