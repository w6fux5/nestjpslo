import Axios, { AxiosRequestConfig } from 'axios';

import { storage } from '@/utils/storage';

export const API_URL = '/api';
export const JWT_SECRET = '123456' as string;

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const token = storage.getToken();
  if (token) {
    console.log(token);
    //   config.headers.authorization = `${token}`;
  }
  //   config.headers.Accept = 'application/json';
  return config;
};

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log(message);

    return Promise.reject(error);
  },
);
