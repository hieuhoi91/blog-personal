'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoShareSocialOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineMoreHoriz } from 'react-icons/md';

import FrameSection from '@/components/common/FrameSection';
import Info from '@/components/common/Info';
import TitleSection from '@/components/common/TitleSection';
import NextImage from '@/components/NextImage';

import { BlogApi } from '@/api/blog-api';
import { Post } from '@/shared/posts.type';

let count = 2;

const LatestPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  const getPosts = async ({ page, sort }: { page: number; sort: string }) => {
    try {
      setIsLoading(false);
      const res = await BlogApi.getAllPosts({ page, sort });
      setTotalPages(res.data.meta.pageCount);
      const postsData = [...posts, ...res.data.data];
      setPosts(postsData);
      setIsLoading(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts({ sort: 'ASC', page: 1 });
    count = 2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetPost = (page: number) => {
    count = page + 1;

    getPosts({ sort: 'ASC', page: page });
  };
  return (
    <div className='flex flex-col gap-4'>
      <TitleSection title='Latest Posts' />
      <FrameSection className='flex flex-col gap-8'>
        {posts.map((item) => (
          <div
            key={item.title}
            className='after:bg-border relative grid grid-cols-5 gap-8 pb-8 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[""] last:pb-0 last:after:hidden'
          >
            <div className='col-span-2 h-full '>
              <div className='h-[190px] cursor-pointer overflow-hidden rounded-lg'>
                <NextImage
                  width={1000}
                  height={240}
                  alt=''
                  src={item.thumbnail}
                  className='h-full w-full object-cover transition-all hover:scale-105'
                />
                <Button
                  disabled
                  disableAnimation
                  isIconOnly
                  size='sm'
                  radius='full'
                  className='bg-main absolute left-6 top-6 z-20'
                >
                  <IoVideocamOutline className='text-lg text-white ' />
                </Button>
              </div>
            </div>
            <div className='col-span-3 flex flex-col gap-2'>
              <Info
                avatar={true}
                name={item.user.username}
                avatarUrl={item.user.avatar}
                date={item.createdAt}
              />
              <Link href={`/blogs/${item.slug}`}>
                <h4 className='text-text-primary hover:text-hover-text dark:hover:text-hover-text cursor-pointer transition-all dark:text-white'>
                  {item.title}
                </h4>
              </Link>
              <p className='text-text-secondary'>
                The European languages are members of the same family. Their
                separate existence is a myth.…
              </p>
              <div className='flex flex-1 items-end justify-between'>
                <span className='hover:text-hover-text cursor-pointer text-2xl transition-all'>
                  <IoShareSocialOutline />
                </span>
                <span className='hover:text-hover-text cursor-pointer text-2xl transition-all'>
                  <MdOutlineMoreHoriz />
                </span>
              </div>
            </div>
          </div>
        ))}
        {totalPages < count ? (
          ''
        ) : (
          <div className='flex justify-center'>
            <Button
              radius='full'
              isLoading={!isLoading}
              size='md'
              className='text-text-secondary hover:text-hover-text border-text-secondary hover:border-hover-text cursor-pointer border bg-transparent opacity-60 transition-all hover:opacity-100'
              onClick={() => handleGetPost(count)}
            >
              Load more
            </Button>
          </div>
        )}
      </FrameSection>
    </div>
  );
};

export default LatestPosts;
