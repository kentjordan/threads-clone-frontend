import axios from 'axios';

let authdAPI = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });
let publicAPI = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });

export {
    authdAPI,
    publicAPI
};