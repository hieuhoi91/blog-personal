import { Meta } from '@/shared/posts.type';

export interface ReqSearchUser {
  page?: number;
  sort?: string;
  take?: number;
}

export interface ResAllUser {
  data: Users[];
  meta: Meta;
}

export interface Users {
  id: string;
  username: string;
  email: string;
  avatar: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}
