export interface ResPostsByCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  user_id: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface ResPostBySlug {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  user_id: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface ReqSearchPost {
  page?: number;
  sort?: string;
  take?: number;
  cates_slug?: string;
}

export interface ResAllPost {
  data: Post[];
  meta: Meta;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  user_id: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface Meta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
