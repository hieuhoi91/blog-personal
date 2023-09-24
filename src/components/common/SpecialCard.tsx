import { Chip } from '@nextui-org/react';
import { FC } from 'react';

import NextImage from '@/components/NextImage';
interface SpecialCardProps {
  type?: boolean;
}

const SpecialCard: FC<SpecialCardProps> = (props) => {
  return (
    <div className='group relative z-10 col-span-2 overflow-hidden rounded-lg shadow-xl'>
      <NextImage
        width={1000}
        height={1000}
        src='/images/thumnail1.jpg'
        alt='thumnail1'
        className='h-full w-full object-cover saturate-200 transition-all group-hover:scale-105'
      />
      <div
        className={`${
          props.type ? 'bottom-12 left-12' : 'bottom-6 left-6 '
        } absolute z-20 flex flex-col items-start gap-4`}
      >
        <Chip className='bg-main text-white'>Inspiration</Chip>
        <h2 className={`${props.type ? 'text-4xl' : 'text-2xl'} text-white`}>
          5 Easy Ways You Can Turn Future Into Success
        </h2>
        <span className='text-zinc-300'>Katen Doe • August 20, 2022</span>
      </div>
      <div className='absolute left-0 top-0 z-10 h-full w-full bg-[#203656] opacity-60'></div>
    </div>
  );
};

export default SpecialCard;
