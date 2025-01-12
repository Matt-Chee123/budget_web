import React from 'react';
import Navbar from './components/layouts/navbar';

function MainLayout({ children }) {
    return (
        <>
        <Navbar />
            <main>{children}</main>
        </>
    )
}