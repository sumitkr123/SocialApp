import {AxiosRequestParams} from '@/types/common';
import {BASE_URL} from '@env';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  response => {
    if (response.data.toast === true && response.data.message) {
      Toast.show({
        type: response.status === 200 ? 'success' : 'error',
        text1: response.status === 200 ? 'Success' : 'Error',
        text2: response.data.message,
        position: 'bottom',
      });
    }
    return response;
  },
  _error => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Something went wrong..!',
      position: 'bottom',
    });
  },
);

export const axiosGet = async ({url, data}: AxiosRequestParams) => {
  const response = await axiosInstance({
    method: 'get',
    url: url,
    data: data,
  });

  return response;
};

export const axiosPost = async ({url, data}: AxiosRequestParams) => {
  const response = await axiosInstance({
    method: 'post',
    url: url,
    data: data,
  });

  return response;
};

export const axiosPut = async ({url, data}: AxiosRequestParams) => {
  const response = await axiosInstance({
    method: 'put',
    url: url,
    data: data,
  });

  return response;
};

export const axiosDelete = async ({url, data}: AxiosRequestParams) => {
  const response = await axiosInstance({
    method: 'delete',
    url: url,
    data: data,
  });

  return response;
};
