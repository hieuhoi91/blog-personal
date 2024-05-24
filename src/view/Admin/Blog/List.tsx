import { Pagination } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { BlogApi } from '@/api/blog-api';
import { Post } from '@/shared/posts.type';
import ProductItem from '@/view/Admin/Blog/ProductItem';

const List = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getPosts = async ({
    page,
    sort,
    take,
  }: {
    page: number;
    sort: string;
    take: number;
  }) => {
    try {
      const res = await BlogApi.getAllPosts({ page, sort, take });
      setPosts(res.data.data);
      setTotalPages(res.data.meta.pageCount);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    const _ = await BlogApi.deletePost(id);
    getPosts({ sort: 'ASC', page: currentPage, take: 10 });
    toast.success('Product deleted successfully');
  };

  useEffect(() => {
    getPosts({ sort: 'ASC', page: currentPage, take: 10 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        {posts.map((post) => (
          <ProductItem
            handleDeleteProduct={handleDeleteProduct}
            post={post}
            key={post.id}
          />
        ))}
      </div>
      <div className='flex justify-end'>
        <Pagination
          isCompact
          showControls
          total={totalPages}
          initialPage={1}
          onChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default List;
