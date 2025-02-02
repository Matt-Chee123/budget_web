import { React, useState, useEffect } from 'react';
import axiosInstance from '../../config/axios';

function UserAccounts(){
    let [accounts, setAccounts] = useState([]);

    const getUserAccounts = async () => {
        try {
            const response = await axiosInstance.get("/accounts/all/", { withCredentials: true });
            setAccounts(response.data);
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getUserAccounts();
    },[])
    return (
        <div>
            <div className="flex h-1/4 w-full justify-center p-3">
                <h2>Accounts</h2>
            </div>
            <div className="flex-col h-3/4 p-3">
                {accounts.map((account, index) => (
                    <div key={index} className="p-3">{account.account_name} - {account.total}</div>
                ))}
            </div>
        </div>
    )
}

export default UserAccounts;