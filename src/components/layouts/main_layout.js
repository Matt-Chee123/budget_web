import React from 'react';
import Navbar from './navbar';
import AppRouter from "../../config/app_routing";
import {Outlet} from "react-router-dom";

function MainLayout({ children }) {
    return (
        <>
        <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout;