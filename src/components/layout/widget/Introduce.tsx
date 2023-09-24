import Link from 'next/link';
import React from 'react';

import FrameSection from '@/components/common/FrameSection';
import { social } from '@/components/layout/Header';
import NextImage from '@/components/NextImage';

const Introduce = () => {
  return (
    <FrameSection className='relative'>
      <NextImage
        width={1000}
        height={1000}
        alt=''
        src='https://themeger.shop/wordpress/katen/wp-content/uploads/2022/09/map-bg.png'
        className='w-full'
      />
      <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 p-[30px]'>
        <NextImage
          width={118}
          height={28}
          src='https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/logo.svg'
          alt='logo'
        />
        <p className='text-text-secondary w-full text-center text-[15px]'>
          Hello, We’re content writer who is fascinated by content fashion,
          celebrity and lifestyle. We helps clients bring the right content to
          the right people.
        </p>
        <div className='col-span-1 flex items-center justify-center gap-4'>
          {social.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className='hover:text-secondary text-xl'>{item.icon}</span>
            </Link>
          ))}
        </div>
      </div>
    </FrameSection>
  );
};

export default Introduce;
