import { create } from 'zustand';
import axiosInstance from "../../config/axios";

const useBankStore = create((set) => ({
    accounts: [],
    selectedAccount: "total",
    setSelectedAccount: (account) => set({ selectedAccount: account }),
    fetchAccounts: async () => {
        try {
            const response = await axiosInstance.get(`/accounts/all`, { withCredentials: true });
            set({ accounts: response.data.accounts });
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    },
}));

export default useBankStore;
