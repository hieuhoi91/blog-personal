'use client';

import React from 'react';

import Layout from '@/components/layout';
import Widget from '@/components/layout/widget';

import LatestPosts from '@/view/Home/LatestPosts';

const Blogs = () => {
  return (
    <Layout>
      <div className='mt-[10px] grid grid-cols-3 gap-6'>
        <div className='col-span-2 flex flex-col gap-[50px]'>
          <LatestPosts />
        </div>
        <div className='col-span-1'>
          <Widget />
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
