import React, { useState } from "react";
import axiosInstance from '../../config/axios';
import Box from '../layouts/box';
import top_incomes from '../charts/income';
import TopIncomes from "../charts/income";

function HomePage() {
    return (
        <div className="flex flex-1 flex-col md:flex-row w-full">
            <div className="basis-1/3 flex-col">
                <div className="flex-col h-full">
                    <div className="h-1/4 p-3">
                        <Box></Box>
                    </div>
                    <div className="h-3/4 p-3 pt-0 pb-20">
                        <Box></Box>
                    </div>
                </div>
            </div>
            <div className="basis-2/3">
                <div className="flex-col h-screen">
                    <div className="h-3/5 p-3 pl-0">
                        <Box></Box>
                    </div>
                    <div className="h-2/5">
                        <div className="flex flex-row h-full">
                            <div className="basis-1/3 top-0 p-3 pt-0 pl-0 pb-20">
                                <Box>
                                    <TopIncomes />
                                </Box>
                            </div>
                            <div className="basis-1/3 top-0 pe-3 pb-20">
                                <Box></Box>
                            </div>
                            <div className="basis-1/3 top-0 pe-3 pb-20">
                                <Box></Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;