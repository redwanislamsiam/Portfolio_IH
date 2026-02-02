import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='font-saira'>
            <Navbar /> 
            <Outlet /> 
            <Footer /> 
        </div>
    );
};

export default MainLayout;