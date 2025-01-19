import React from 'react';
import Navbar from './navbar';
import AppRouter from "../../config/app_routing";

function MainLayout({ children }) {
    return (
        <>
        <Navbar />
            <main>{children}</main>
        </>
    )
}

export default MainLayout;