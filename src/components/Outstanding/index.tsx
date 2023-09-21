import { Button, Chip } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

import { dataBlog } from '@/data/mock-data';

import FrameSection from '@/components/common/FrameSection';
import NextImage from '@/components/NextImage';

const Outstanding = () => {
  return (
    <div className='mt-6 grid h-[560px] grid-cols-3 gap-6'>
      <div className='group relative col-span-2 overflow-hidden rounded-lg'>
        <NextImage
          width={1000}
          height={1000}
          src='/images/thumnail1.jpg'
          alt='thumnail1'
          className='h-full w-full object-cover saturate-200 transition-all group-hover:scale-105'
        />
        <div className='absolute bottom-16 left-16 z-10 flex flex-col items-start gap-4 '>
          <Chip className='bg-main text-white'>Inspiration</Chip>
          <h2 className='text-4xl text-white'>
            5 Easy Ways You Can Turn Future Into Success
          </h2>
          <span className='text-zinc-300'>Katen Doe • August 20, 2022</span>
        </div>
      </div>
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
            variant='bordered'
            className='h-[44px] grid-cols-1'
          >
            Recent
          </Button>
        </div>
        <div className='flex flex-1 flex-col justify-between'>
          {dataBlog.map((item) => (
            <div
              key={item.day}
              className='flex gap-4 border-b pb-2 last:border-0 last:pb-0'
            >
              <div className='h-[60px] cursor-pointer overflow-hidden rounded-full'>
                <NextImage
                  width={60}
                  height={60}
                  src={item.thumbnail}
                  alt=''
                  className='h-[60px] w-[60px] object-cover transition-all hover:scale-105'
                />
              </div>
              <div className='flex flex-1 flex-col gap-2 '>
                <Link
                  href=''
                  className='hover:text-hover-text text-lg font-bold transition-all'
                >
                  {item.title}
                </Link>
                <span>{item.day}</span>
              </div>
            </div>
          ))}
        </div>
      </FrameSection>
    </div>
  );
};

export default Outstanding;
