import { Avatar, Badge } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

import { dataBlog } from '@/data/mock-data';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const PopularPost = () => {
  return (
    <FrameSection className='flex flex-col gap-6'>
      <TitleSection widget={true} title='Popular Posts' />
      <div className='grid flex-1 grid-rows-4 flex-col justify-between gap-4 '>
        {dataBlog.map((item, index) => (
          <div
            key={item.day}
            className='after:bg-border relative flex gap-4 pb-2 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[""] last:pb-0 last:after:hidden'
          >
            <Badge
              isOneChar
              content={index + 1}
              color='danger'
              placement='top-left'
              shape='circle'
            >
              <Avatar radius='full' size='lg' src={item.thumbnail} />
            </Badge>
            <div className='flex flex-1 flex-col gap-2 '>
              <Link
                href=''
                className='hover:text-hover-text text-[15px] font-bold transition-all'
              >
                {item.title}
              </Link>
              <span>{item.day}</span>
            </div>
          </div>
        ))}
      </div>
    </FrameSection>
  );
};

export default PopularPost;
