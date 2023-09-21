import React from 'react';

import { dataBlog2 } from '@/data/mock-data';

import NextImage from '@/components/NextImage';

const MultipleCard = () => {
  return (
    <div className='grid grid-rows-4 gap-4'>
      {dataBlog2.map((item) => (
        <div key={item.thumbnail} className='flex gap-6'>
          <div className='h-[100px] overflow-hidden rounded-lg'>
            <NextImage
              width={250}
              height={250}
              alt=''
              src={item.thumbnail}
              className='w-full object-contain transition-all hover:scale-105'
            />
          </div>
          <div className='flex w-full flex-col gap-2'>
            <h5 className='text-text-primary font-bold'>{item.title}</h5>
            <span className='text-text-secondary'>{item.day}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleCard;
