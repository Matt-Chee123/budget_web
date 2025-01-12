import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/pages/login_page';
//import { MainLayout } from './components/layouts/main_layout';

function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            {/*<Route path="/main" element={*/}
            {/*        <MainLayout>*/}
            {/*            <HomePage />*/}
            {/*        </MainLayout>*/}
            {/*    } />*/}
        </Routes>
    )
}

export default AppRouter;