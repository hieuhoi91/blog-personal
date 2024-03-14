import axios, { AxiosHeaders } from 'axios';
import { getServerSession } from 'next-auth';

import { BASE_URL_API } from '@/constant';

const axiosClient = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  async (request) => {
    const session = await getServerSession();

    if (session) {
      // (request.headers as AxiosHeaders).set(
      //   'Authorization',
      //   `Bearer ${session?.token.user.accessToken}`
      // );
    } else if (axios.defaults.headers.common.Authorization && request.headers) {
      (request.headers as AxiosHeaders).set(
        'Authorization',
        axios.defaults.headers.common.Authorization
      );
    }
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
