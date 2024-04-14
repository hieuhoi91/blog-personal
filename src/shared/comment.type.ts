import { User } from '@/shared/posts.type';

export interface ResComment {
  id: string;
  comment: string;
  user_id: string;
  post_id: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}
