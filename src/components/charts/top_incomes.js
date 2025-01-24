import { React, useState, useEffect } from 'react';
import axiosInstance from '../../config/axios';


function TopIncomes(){
    let [topIncomes, setTopIncomes] = useState(null);

    const retrieve_top_incomes = async () => {
        try {
            const response = await axiosInstance.get("/incomes/record")
            console.log(response);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        retrieve_top_incomes();
    },[])
    return (<></>)
}

export default TopIncomes;