import axiosClient from '@/api/axiosClient';
import { ReqLogin, ReqRegister, ResLogin, ResRegister } from '@/shared/type';

export const BlogApi = {
  login: async (req: ReqLogin) => {
    return await axiosClient.post<ResLogin>('/auth/login', req);
  },

  register: async (req: ReqRegister) => {
    return await axiosClient.post<ResRegister>('/auth/register', req);
  },
};
