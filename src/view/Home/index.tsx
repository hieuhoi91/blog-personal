'use client';

import React from 'react';

import Widget from '@/components/layout/widget';
import NextImage from '@/components/NextImage';

import Editor from '@/view/Home/EditorPick';
import Inspiration from '@/view/Home/Inspiration';
import LatestPosts from '@/view/Home/LatestPosts';
import Outstanding from '@/view/Home/Outstanding';
import Trending from '@/view/Home/Trending';

const Home = () => {
  return (
    <div className='flex flex-col gap-[50px]'>
      <Outstanding />
      <div className='mt-[10px] grid grid-cols-3 gap-6'>
        <div className='col-span-2 flex flex-col gap-[50px]'>
          <Editor />
          <NextImage
            height={126}
            width={1000}
            alt=''
            src='https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/ad-750.png'
            className='w-full '
          />
          <Trending />
          <Inspiration />
          <LatestPosts />
        </div>
        <div className='col-span-1'>
          <Widget />
        </div>
      </div>
    </div>
  );
};

export default Home;
