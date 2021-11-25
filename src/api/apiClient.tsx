import axios from "axios";

axios.defaults.timeout = 30000;

export const useAxios = async (axiosParams: any) => {

    return new Promise((resolve, reject) => {
        axios.request(axiosParams)
            .then((response) => {
                resolve(response?.data);
            })
            .catch((error) => {
                console.log("Error Response  : ", error?.response);
                reject(error?.response)
            });
    });
};

