import axiosClient from './axiosClinet';

const userApi = {
  register(data) {
    const url = '/auth/local/register';
    return axiosClient.get(url, data);
  },
};

export default userApi;
