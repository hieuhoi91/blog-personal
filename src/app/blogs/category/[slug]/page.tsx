'use client';

import { Button, Card, Skeleton } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IoShareSocialOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineMoreHoriz } from 'react-icons/md';

import FrameSection from '@/components/common/FrameSection';
import Info from '@/components/common/Info';
import Widget from '@/components/layout/widget';
import NextImage from '@/components/NextImage';

import { BlogApi } from '@/api/blog-api';
import { ResPostsByCategory } from '@/shared/posts.type';

const Blogs = () => {
  const [blogs, setBlogs] = useState<ResPostsByCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split('/');

  const name = slug[slug.length - 1];

  useEffect(() => {
    const handleCategory = async (slug: string) => {
      try {
        setIsLoading(false);
        const data_category = await BlogApi.getAllCategory();
        const data = data_category.data.find(
          (category) => category.slug === slug
        );

        if (data) {
          const data_posts = await BlogApi.getAllPostsByCategory(data.id);
          setBlogs(data_posts.data);
          setIsLoading(true);
        } else {
          // eslint-disable-next-line no-console
          console.error('Category not found');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    handleCategory(name);
  }, [name]);

  return (
    <div className='grid grid-cols-3 gap-6'>
      <div className='col-span-2 flex flex-col gap-[50px]'>
        <FrameSection className='flex flex-col gap-8'>
          {!isLoading ? (
            <div className='flex flex-col gap-8'>
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <Card
                    key={idx}
                    className='grid w-full grid-cols-3 gap-8 p-4'
                    radius='lg'
                  >
                    <Skeleton className='rounded-lg'>
                      <div className='bg-default-300 col-span-1 h-40 rounded-lg'></div>
                    </Skeleton>
                    <div className='col-span-2 space-y-3'>
                      <div className='flex w-full items-center gap-3'>
                        <div>
                          <Skeleton className='flex h-8 w-8 rounded-full' />
                        </div>
                        <div className='flex w-full flex-col gap-2'>
                          <Skeleton className='h-3 w-3/5 rounded-lg' />
                        </div>
                      </div>
                      <Skeleton className='w-3/5 rounded-lg'>
                        <div className='bg-default-200 h-3 w-3/5 rounded-lg'></div>
                      </Skeleton>
                      <Skeleton className='w-4/5 rounded-lg'>
                        <div className='bg-default-200 h-3 w-4/5 rounded-lg'></div>
                      </Skeleton>
                      <Skeleton className='w-2/5 rounded-lg'>
                        <div className='bg-default-300 h-3 w-2/5 rounded-lg'></div>
                      </Skeleton>
                    </div>
                  </Card>
                ))}
            </div>
          ) : (
            <div>
              {blogs.length !== 0
                ? blogs.map((item) => (
                    <div
                      key={item.id}
                      className='after:bg-border relative grid grid-cols-5 gap-8 pb-8 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[""]'
                      onClick={() => router.push(`/blogs/${item.slug}`)}
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
                          date={item.createdAt}
                        />
                        <h4 className='text-text-primary hover:text-hover-text dark:hover:text-hover-text cursor-pointer transition-all dark:text-white'>
                          {item.title}
                        </h4>
                        <p className='text-text-secondary'>
                          The European languages are members of the same family.
                          Their separate existence is a myth.…
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
                  ))
                : 'Không có bài viết nào!'}
            </div>
          )}
          <div className='flex justify-center'></div>
        </FrameSection>
      </div>
      <div className='col-span-1'>
        <Widget />
      </div>
    </div>
  );
};

export default Blogs;
