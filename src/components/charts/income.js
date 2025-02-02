import { React, useState, useEffect } from 'react';
import axiosInstance from '../../config/axios';

function TopIncomes(){
    let [income, setIncome] = useState(null);
    let [loading, setLoading] = useState(true);
    const retrieve_total_incomes = async () => {
        try {
            const response = await axiosInstance.get("/incomes/total/", { withCredentials: true });
            setIncome(response.data.total_income)

        } catch(error){
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        retrieve_total_incomes();
    },[])
    return (
        <div>
            <div className="flex h-1/4 w-full justify-center p-3">
                <h2>Incomes</h2>
            </div>
            <div className="flex-col h-3/4 p-3">
                <div className="p-3 justify-center">Total Income - {income}</div>
            </div>
        </div>

    )
}

export default TopIncomes;