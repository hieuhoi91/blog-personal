import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

import { dataBlog } from '@/data/mock-data';

import FrameSection from '@/components/common/FrameSection';
import SpecialCard from '@/components/common/SpecialCard';
import NextImage from '@/components/NextImage';

const Outstanding = () => {
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
          {dataBlog.map((item) => (
            <div
              key={item.day}
              className='after:bg-border relative flex gap-4 pb-2 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[""] last:pb-0 last:after:hidden'
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
                  className='hover:text-hover-text text-[15px] font-bold transition-all'
                >
                  {item.title}
                </Link>
                <span className='text-[14px]'>{item.day}</span>
              </div>
            </div>
          ))}
        </div>
      </FrameSection>
    </div>
  );
};

export default Outstanding;
