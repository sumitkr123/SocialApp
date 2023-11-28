import {axiosGet} from './axios';

export const GetUsers = async () => {
  const response = await axiosGet({
    url: '/users',
    data: {name: 'XYZ', email: 'xyz@gmail.com'},
  });

  return response;
};
