'use client';

import React from 'react';

import NextImage from '@/components/NextImage';

import Editor from '@/view/Home/EditorPick';
import Inspiration from '@/view/Home/Inspiration';
import LatestPosts from '@/view/Home/LatestPosts';
import Outstanding from '@/view/Home/Outstanding';
import Trending from '@/view/Home/Trending';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Outstanding />
      <div className='h-[50px]'></div>
      <div className='mt-[10px] grid grid-cols-3'>
        <div className='col-span-2'>
          <Editor />
          <div className='h-[50px]'></div>
          <NextImage
            height={126}
            width={1000}
            alt=''
            src='https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/ad-750.png'
            className='w-full '
          />
          <div className='h-[50px]'></div>
          <Trending />
          <div className='h-[50px]'></div>
          <Inspiration />
          <div className='h-[50px]'></div>
          <LatestPosts />
          <div className='h-[50px]'></div>
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  );
};

export default Home;
