import React, { useState } from "react";
import Box from '../layouts/box';
import AccountSelection from '../charts/b_account_selector'


function BankAccounts() {
    return (
        <div className="flex flex-1 flex-col md:flex-row w-full">
            <div className="basis-2/5 flex-col">
                <div className="flex-col h-full">
                    <div className="flex flex-row h-1/3">
                        <div className="w-1/2 h-full p-3 pr-0">
                            <Box>
                                <AccountSelection />
                            </Box>
                        </div>
                        <div className="w-1/2 h-full p-3">
                            <Box></Box>
                        </div>
                    </div>
                    <div className="h-2/3 p-3 pt-0 pb-20">
                        <Box></Box>
                    </div>
                </div>
            </div>
            <div className="basis-3/5">
                <div className="flex-col h-screen">
                    <div className="h-1/2 p-3 pl-0">
                        <Box></Box>
                    </div>
                    <div className="h-1/2 pl-0 pb-20">
                        <Box></Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankAccounts;