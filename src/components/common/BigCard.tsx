import { Button, Chip } from '@nextui-org/react';
import { FC } from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdHeadphones } from 'react-icons/md';

import Info from '@/components/common/Info';
import NextImage from '@/components/NextImage';

interface BigCardProps {
  item: {
    thumbnail: string;
    title: string;
    day: string;
  };
  subType: 'none' | 'video' | 'audio';
}

const BigCard: FC<BigCardProps> = (props) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative mb-6'>
        <div className='overflow-hidden rounded-lg'>
          <NextImage
            src={props.item?.thumbnail}
            height={1000}
            width={1000}
            alt=''
            className='w-full transition-all hover:scale-105'
          />
        </div>
        <Chip className='bg-main absolute left-6 top-6 z-10 text-white'>
          Fashion
        </Chip>
        {props.subType === 'none' ? null : (
          <Button
            disabled
            disableAnimation
            isIconOnly
            size='lg'
            radius='full'
            className='bg-main absolute -bottom-6 right-6 z-20'
          >
            {props.subType === 'video' ? (
              <IoVideocamOutline className='text-lg text-white ' />
            ) : (
              <MdHeadphones className='text-lg text-white ' />
            )}
          </Button>
        )}
      </div>
      <Info />
      <h3 className='text-text-primary hover:text-hover-text'>
        3 Easy Ways To Make Your iPhone Faster
      </h3>
      <p className='text-text-secondary'>
        The European languages are members of the same family. Their separate
        existence is a myth. For science, music, sport, etc,…
      </p>
    </div>
  );
};

export default BigCard;
