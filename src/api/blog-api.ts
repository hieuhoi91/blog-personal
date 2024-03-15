import axiosClient from '@/api/axiosClient';
import { ReqLogin, ReqRegister, ResLogin, ResRegister } from '@/shared/type';

export const BlogApi = {
  login: async (req: ReqLogin) => {
    const res = await axiosClient.post<ResLogin>('/auth/login', req);
    return res.data;
  },

  register: async (req: ReqRegister) => {
    return await axiosClient.post<ResRegister>('/auth/register', req);
  },
};
