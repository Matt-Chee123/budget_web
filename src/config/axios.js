import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.apiBaseUrl,
    withCredentials: true,
})

export default axiosInstance;
