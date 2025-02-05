import { create } from 'zustand';
import axiosInstance from "../../config/axios";

const useBankStore = create((set) => ({
    accounts: [],
    selectedAccount: null,
    setSelectedAccount: (account) => set({ selectedAccount: account }),
    fetchAccounts: async () => {
        try {
            const response = await axiosInstance.get(`/accounts/all`, { withCredentials: true });
            if (response.data && response.data.length > 0) {
                const totalBalance = response.data.reduce((sum, account) => {
                    return sum + parseFloat(account.total);
                }, 0);

                const totalAccount = {
                    account_name: "Total",
                    total: totalBalance.toFixed(2),
                };

                const updatedAccounts = [...response.data, totalAccount];

                set({ accounts: updatedAccounts, selectedAccount: totalAccount });
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    },
}));

window.BankStore = useBankStore;
export default useBankStore;
