import axios from 'axios';

let securedAPI = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });
let publicAPI = axios.create({ baseURL: process.env.EXPO_PUBLIC_API_URL });

export {
    securedAPI,
    publicAPI
};