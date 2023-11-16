'use client';

import React from 'react';

import Widget from '@/components/layout/widget';

import LatestPosts from '@/view/Home/LatestPosts';

const Blogs = () => {
  return (
    <div className='mt-[10px] grid grid-cols-3 gap-6'>
      <div className='col-span-2 flex flex-col gap-[50px]'>
        <LatestPosts />
      </div>
      <div className='col-span-1'>
        <Widget />
      </div>
    </div>
  );
};

export default Blogs;
