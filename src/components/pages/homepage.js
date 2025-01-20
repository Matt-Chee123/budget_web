import React, { useState } from "react";
import axiosInstance from '../../config/axios';
import { Navigate } from 'react-router-dom';

function HomePage() {
    return (
        <div className="flex flex-1 flex-col md:flex-row items-center justify-center w-full bg-amber-600">
            <div className="basis-1/3 flex-col bg-green-300">
                <div className="flex-col h-screen">
                    <div className="h-1/4 bg-red-300">
                    </div>
                    <div className="h-3/4 bg-black">

                    </div>
                </div>
            </div>
            <div className="basis-2/3">
                <div className="flex-col h-screen bg-red-400">
                    <div className="h-3/5 bg-green-500"></div>
                    <div className="h-2/5 bg-white"></div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;