import React from "react";
import useBankStore from "../stores/useBankStore";

function TotalBalance() {
    const { selectedAccount } = useBankStore();

    if (!selectedAccount) {
        return <p>No account selected</p>;
    }

    return (
        <div className="p-3">
            <h2 className="text-xl font-medium">Total Balance for {selectedAccount.account_name}</h2>
            <p>${selectedAccount.total}</p>
        </div>
    );
}

export default TotalBalance;
