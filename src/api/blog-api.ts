import axiosClient from '@/api/axiosClient';
import { CreateCategory, ResCategories } from '@/shared/category.type';
import { ResComment } from '@/shared/comment.type';
import {
  ReqSearchPost,
  ResAllPost,
  ResPostBySlug,
  ResPostsByCategory,
} from '@/shared/posts.type';
import {
  ReqLogin,
  ReqRegister,
  ReqUploadFiles,
  ResLogin,
  ResRefreshToken,
  ResRegister,
  ResUploadFiles,
} from '@/shared/type';
import { ReqSearchUser } from '@/shared/user.type';

export const BlogApi = {
  login: async (req: ReqLogin) => {
    const res = await axiosClient.post<ResLogin>('/auth/login', req);
    return res.data;
  },

  register: async (req: ReqRegister) => {
    return await axiosClient.post<ResRegister>('/auth/register', req);
  },

  refresh_token: async (refreshToken: string) => {
    return await axiosClient.post<ResRefreshToken>('/auth/refresh-token', {
      refreshToken: refreshToken,
    });
  },

  getAllUsers: async ({ sort, page, take }: ReqSearchUser) => {
    return await axiosClient.get('/users/all', {
      params: { sort, page, take },
    });
  },

  deleteUser: async (id: string) => {
    return await axiosClient.delete(`/users/${id}`);
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

  getAllPosts: async ({ sort, page, take, cates_slug }: ReqSearchPost) => {
    return await axiosClient.get<ResAllPost>('/posts', {
      params: { sort, page, take, cates_slug },
    });
  },

  getPostBySlug: async (slug: string) => {
    return await axiosClient.get<ResPostBySlug>(`/posts/${slug}`);
  },

  getAllPostsByCategory: async (id: string) => {
    return await axiosClient.get<ResPostsByCategory[]>(
      `/posts/findbycategory/${id}`
    );
  },
  getPostRecommendById: async () => {
    return await axiosClient.get('/posts/recommend');
  },

  createPost: async (req: CreateCategory) => {
    return await axiosClient.post('/posts', req);
  },

  getCommentbyPostId: async (id: string) => {
    return await axiosClient.get<ResComment[]>(`/comments/${id}`);
  },

  searchPost: async (query: string) => {
    return await axiosClient.get(`/posts/search?title=${query}`);
  },

  deletePost: async (id: string) => {
    return await axiosClient.delete(`/posts/${id}`);
  },
};
