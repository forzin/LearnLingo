import axios from "axios";

export const authInstance = axios.create({
    baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
    authInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    authInstance.defaults.headers.Authorization = '';
};