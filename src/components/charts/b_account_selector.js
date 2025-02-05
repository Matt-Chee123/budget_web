import React, { useEffect } from "react";
import useBankStore from "../stores/useBankStore";

function AccountSelection() {
    const { accounts, selectedAccount, setSelectedAccount, fetchAccounts } = useBankStore();

    useEffect(() => {
        fetchAccounts();
    }, [fetchAccounts]);

    return (
        <form className="p-3 justify-center">
            <label
                htmlFor="accounts"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Select an Account
            </label>
            <select
                id="accounts"
                value={selectedAccount ? selectedAccount.account_name : ""}
                onChange={(e) => {
                    const selected = accounts.find(
                        (account) => account.account_name === e.target.value
                    );
                    setSelectedAccount(selected);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="">Select an Account</option>
                {accounts.map((account) => (
                    <option key={account.account_name} value={account.account_name}>
                        {account.account_name}
                    </option>
                ))}
            </select>
        </form>
    );
}

export default AccountSelection;
