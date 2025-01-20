import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from '../components/pages/login_page';
import HomePage from '../components/pages/homepage';
import MainLayout from '../components/layouts/main_layout';

function AppRouter() {
    const location = useLocation();
    const showNavBar = location.pathname !== '/login';
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<MainLayout />}>
            <Route path="/homepage" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;