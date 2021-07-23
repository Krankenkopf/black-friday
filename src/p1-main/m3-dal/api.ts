import axios from 'axios';

export const instance = axios.create(
    {
        baseURL: 'https://',
        withCredentials: true,
        headers: {
            'API-KEY': ''
        }

    }
)

export enum ResultCodes {
    SUCCESS = 0,
    ERROR = 1
}

