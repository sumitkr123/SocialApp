import {BASE_URL} from '@env';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const toastInterceptor = axiosInstance.interceptors.response.use(
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
  error => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Something went wrong..!',
      position: 'bottom',
    });
  },
);

export const GetUsers = async () => {
  const response = await axiosInstance({
    method: 'get',
    url: '/users',
  });

  return response;
};
