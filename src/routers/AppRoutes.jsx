import React from 'react';
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Research from '../pages/Research';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home/>} /> 
                <Route path='research' element={<Research/>} /> 
            </Route>
        </Routes>
    );
};

export default AppRoutes;