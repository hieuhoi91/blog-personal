import { Button } from '@nextui-org/react';
import React from 'react';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const Newsletter = () => {
  return (
    <FrameSection className='flex flex-col items-center'>
      <TitleSection widget title='Newsletter' />
      <div className='flex flex-col items-center gap-2'>
        <span className='text-text-primary mb-2 font-semibold dark:text-white'>
          Join 70,000 subscribers!
        </span>
        <div className='border-hover-text flex h-[40px] w-full justify-center rounded-full border dark:border-none'>
          <input
            type='text'
            placeholder='Email address...'
            className='w-full rounded-full border-0 px-6 text-center text-sm focus:ring-0 dark:text-black'
          />
        </div>
        <Button radius='full' className='bg-main w-full text-white'>
          Sign Up
        </Button>
        <span className='text-text-secondary mt-2 text-sm'>
          By signing up, you agree to our
          <a href='/' className='text-hover-text'>
            Privacy Policy
          </a>
        </span>
      </div>
    </FrameSection>
  );
};

export default Newsletter;
