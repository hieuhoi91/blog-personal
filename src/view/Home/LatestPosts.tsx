import { Button } from '@nextui-org/react';
import React from 'react';
import { IoShareSocialOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineMoreHoriz } from 'react-icons/md';

import { dataBlog2 } from '@/data/mock-data';

import FrameSection from '@/components/common/FrameSection';
import Info from '@/components/common/Info';
import TitleSection from '@/components/common/TitleSection';
import NextImage from '@/components/NextImage';

const LatestPosts = () => {
  return (
    <div>
      <TitleSection title='Latest Posts' />
      <FrameSection className='flex flex-col gap-8'>
        {dataBlog2.slice(0, 4).map((item) => (
          <div
            key={item.title}
            className='after:bg-border relative grid grid-cols-5 gap-8 pb-8 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[""]'
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
              <Info avatar={true} />
              <h4 className='text-text-primary hover:text-hover-text dark:hover:text-hover-text cursor-pointer transition-all dark:text-white'>
                {item.title}
              </h4>
              <p className='text-text-secondary'>
                The European languages are members of the same family. Their
                separate existence is a myth.…
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
        ))}
        <div className='flex justify-center'>
          <Button
            radius='full'
            isLoading
            size='md'
            className='text-text-secondary hover:text-hover-text border-text-secondary hover:border-hover-text border bg-transparent opacity-60 transition-all hover:opacity-100'
          >
            Load more
          </Button>
        </div>
      </FrameSection>
    </div>
  );
};

export default LatestPosts;
