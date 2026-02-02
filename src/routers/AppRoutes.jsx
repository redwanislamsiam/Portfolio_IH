import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Research from '../pages/Research';
import Contact from '../pages/contact';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home/>} /> 
                <Route path='research' element={<Research/>} /> 
                <Route path='contact' element={<Contact /> } /> 
            </Route>
        </Routes>
    );
};

export default AppRoutes;