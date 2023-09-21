import { FC } from 'react';

import NextImage from '@/components/NextImage';

interface TitleProps {
  title: string;
}

const TitleSection: FC<TitleProps> = (props) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='font-bold'>{props.title}</h3>
      <NextImage
        width={33}
        height={4}
        alt=''
        src='svg/nga.svg'
        className='mb-6'
      />
    </div>
  );
};

export default TitleSection;
