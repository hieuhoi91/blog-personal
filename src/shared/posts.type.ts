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
  avatar: null;
}

export interface ResPostById {
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
