import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://icy-tales-backend.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;