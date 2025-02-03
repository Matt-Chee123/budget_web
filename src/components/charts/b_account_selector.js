import { React, useState, useEffect } from 'react';
import axiosInstance from '../../config/axios';

function AccountSelection(){
    let [selectedAccount, setSelectedAccount] = useState([]);
    let [accounts, setAccounts] = useState([]);

    const getAccounts = async () => {
        try {
            setSelectedAccount([...selectedAccount, 'total']);
            const response = await axiosInstance.get(`/accounts/all`, { withCredentials: true });
            setAccounts(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getAccounts();
    },[])
    return (
        <form className="p-3 justify-center">
            <label htmlFor="accounts" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                an Account</label>
            <select id="accounts"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="total" selected>Total</option>
                    {accounts.map((account) => (
                        <option key={account.account_name} value={account.account_name}>{account.account_name}</option>
                    ))}
            </select>
        </form>
    )
}

export default AccountSelection;