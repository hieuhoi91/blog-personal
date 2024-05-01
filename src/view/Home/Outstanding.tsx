import { Avatar, Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import FrameSection from '@/components/common/FrameSection';
import Info from '@/components/common/Info';
import SpecialCard from '@/components/common/SpecialCard';

import { BlogApi } from '@/api/blog-api';
import { ResPostBySlug } from '@/shared/posts.type';

const Outstanding = () => {
  const [posts, setPosts] = useState<ResPostBySlug[]>([]);

  useEffect(() => {
    const getPosts = async ({ take, page }: { take: number; page: number }) => {
      try {
        const res = await BlogApi.getAllPosts({ take, page });

        setPosts(res.data.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getPosts({ take: 4, page: 1 });
  }, []);

  return (
    <div className='mt-6 grid grid-cols-3 gap-6'>
      <SpecialCard type={true} />
      <FrameSection className='col-span-1 flex flex-col gap-6'>
        <div className='grid grid-cols-2 justify-center gap-4'>
          <Button
            radius='full'
            className='bg-main h-[44px] grid-cols-1 text-white'
          >
            Popular
          </Button>
          <Button
            radius='full'
            className='h-[44px] grid-cols-1 border bg-transparent dark:border-[#343f4c]'
          >
            Recent
          </Button>
        </div>
        <div className='grid flex-1 grid-rows-4 flex-col justify-between gap-4 '>
          {posts.map((item) => (
            <div
              key={item.id}
              className='after:bg-border relative flex gap-4 pb-2 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[""] last:pb-0 last:after:hidden'
            >
              <div className='h-[60px] w-[60px] cursor-pointer overflow-hidden rounded-full'>
                <Avatar
                  src={item.thumbnail}
                  size='lg'
                  className='h-full w-full object-fill transition-all hover:scale-105'
                />
              </div>
              <div className='flex flex-1 flex-col gap-2 '>
                <Link
                  href={`/blogs/${item.slug}`}
                  className='hover:text-hover-text text-[15px] font-bold transition-all'
                >
                  {item.title}
                </Link>
                <Info avatar={false} date={item.createdAt} />
              </div>
            </div>
          ))}
        </div>
      </FrameSection>
    </div>
  );
};

export default Outstanding;
