import axios from "axios"
// const { default: axios } = require("axios")

class AsyncAwait {
    static useGetAxios = async (URL) => {
        return await axios.get(URL)
    }

    static usePostAxios = async (URL,DATA) => {
        return await axios.post(URL,DATA);
    }

    static setHeaderRequest = (HEADER) => {
       return axios.defaults.headers = HEADER;
    }
}



const result = AsyncAwait.useGetAxios('https://api.freerealapi.com/comments');
console.log(result);