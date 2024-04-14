import { JWT } from 'next-auth/jwt';

import axiosClient from '@/api/axiosClient';
import { CreateCategory, ResCategories } from '@/shared/category.type';
import { ResComment } from '@/shared/comment.type';
import { ResPostBySlug, ResPostsByCategory } from '@/shared/posts.type';
import {
  ReqLogin,
  ReqRegister,
  ReqUploadFiles,
  ResLogin,
  ResRefreshToken,
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

  refresh_token: async (refreshToken: JWT) => {
    return await axiosClient.post<ResRefreshToken>(
      '/auth/refresh-token',
      refreshToken
    );
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

  getPostBySlug: async (slug: string) => {
    return await axiosClient.get<ResPostBySlug>(`/posts/${slug}`);
  },

  getAllPostsByCategory: async (id: string) => {
    return await axiosClient.get<ResPostsByCategory[]>(
      `/posts/findbycategory/${id}`
    );
  },

  createPost: async (req: CreateCategory) => {
    return await axiosClient.post('/posts', req);
  },

  getCommentbyPostId: async (id: string) => {
    return await axiosClient.get<ResComment[]>(`/comments/${id}`);
  },
};
