import axios, { AxiosHeaders } from 'axios';
import { getSession } from 'next-auth/react';

import { BASE_URL } from '@/constant';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  async (request) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const session: any = await getSession();

    if (session) {
      (request.headers as AxiosHeaders).set(
        'Authorization',
        `Bearer ${session?.token.user.accessToken}`
      );
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
