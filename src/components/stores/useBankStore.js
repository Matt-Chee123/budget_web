import { create } from 'zustand';
import axiosInstance from "../../config/axios";

const useBankStore = create((set) => ({
    accounts: [],
    selectedAccount: "total",
    setSelectedAccount: (account) => set({ selectedAccount: account }),
    fetchAccounts: async () => {
        try {
            const response = await axiosInstance.get(`/accounts/all`, { withCredentials: true });
            console.log(response);
            set({ accounts: response.data });
        } catch (error) {
            console.error("Error fetching accounts:", error);
        }
    },
}));
window.BankStore = useBankStore;
export default useBankStore;
