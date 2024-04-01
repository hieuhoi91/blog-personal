import axiosClient from '@/api/axiosClient';
import {
  ReqLogin,
  ReqRegister,
  ReqUploadFiles,
  ResCategories,
  ResLogin,
  ResRegister,
  ResUploadFiles,
} from '@/shared/type';

export const BlogApi = {
  login: async (req: ReqLogin) => {
    const res = await axiosClient.post<ResLogin>('/auth/login', req);
    return res.data;
  },

  register: async (req: ReqRegister) => {
    return await axiosClient.post<ResRegister>('/auth/register', req);
  },

  uploadFiles: async (props: ReqUploadFiles) => {
    const formData = new FormData();
    props.files.forEach((file) => {
      formData.append('files', file);
    });

    return await axiosClient.post<ResUploadFiles>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  getAllCategory: async () => {
    return await axiosClient.get<ResCategories[]>('/categories');
  },

  // createPost: async (req) => {
  //   return await
  // }
};
