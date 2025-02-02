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
        <div className="flex flex-col p-10">
            <div className="flex flex-row justify-center">
                <h2>Total Income - </h2>
                <div>{income}</div>
            </div>
        </div>

    )
}

export default TopIncomes;