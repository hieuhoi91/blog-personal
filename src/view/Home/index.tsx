'use client';

import React from 'react';

import Editor from '@/components/EditorPick';
import NextImage from '@/components/NextImage';
import Outstanding from '@/components/Outstanding';
import Trending from '@/components/Trending';

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
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  );
};

export default Home;
