import { FC } from 'react';

import NextImage from '@/components/NextImage';

interface SmallCardProps {
  item: {
    thumbnail: string;
    title: string;
    day: string;
  };
}

const SmallCard: FC<SmallCardProps> = (props) => {
  return (
    // <div className='flex gap-6 pb-4 '>
    <div className='after:bg-border relative flex gap-6 pb-4 after:absolute after:bottom-0 after:h-[1px] after:w-full after:content-[""] last:after:hidden'>
      <div className='h-[96px] cursor-pointer overflow-hidden rounded-lg'>
        <NextImage
          width={250}
          height={250}
          alt=''
          src={props.item.thumbnail}
          className='h-full w-full object-contain transition-all hover:scale-105'
        />
      </div>
      <div className='flex w-full flex-col gap-2'>
        <h5 className='text-text-primary hover:text-hover-text cursor-pointer font-bold dark:text-white'>
          {props.item.title}
        </h5>
        <span className='text-text-secondary text-[14px]'>
          {props.item.day}
        </span>
      </div>
    </div>
  );
};

export default SmallCard;
