import axiosInstance from 'axios';

function authentication() {

    const checkToken = async () => {
        try {
            let response = await axiosInstance.get(`/users/validateToken`, {withCredentials: true});
            console.log(response);
            return true
        } catch (error) {
            console.log(error)
        }
    }
}