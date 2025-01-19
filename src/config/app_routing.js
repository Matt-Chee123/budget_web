import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/pages/login_page';
import HomePage from '../components/pages/homepage';
//import { MainLayout } from './components/layouts/main_layout';

function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/homepage" element={
            //        <MainLayout>
                        <HomePage />
            //        </MainLayout>
                } />
        </Routes>
    )
}

export default AppRouter;