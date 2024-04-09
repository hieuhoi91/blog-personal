export interface ResCategories {
  id: string;
  description?: string;
  name: string;
  slug: string;
}

export interface CreateCategory {
  category_id: string;
  title: string;
  thumbnail_url: string;
  description: string;
}
