'use client';

import { Button, Chip } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import FrameSection from '@/components/common/FrameSection';
import Info from '@/components/common/Info';
import TitleSection from '@/components/common/TitleSection';
import NextImage from '@/components/NextImage';

const Celebration = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper] = useState<any>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const s = document.querySelector('.swiper-celebration') as any;
    setSwiper(s?.swiper);
  }, []);

  return (
    <FrameSection className='flex flex-col gap-4'>
      <TitleSection title='Celebration' widget />
      <Swiper
        className='swiper-celebration w-full'
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <div className='relative mb-6'>
            <div className='cursor-pointer overflow-hidden rounded-lg'>
              <NextImage
                src='https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/thought-catalog-640705-unsplash-1024x683.jpg'
                height={1000}
                width={1000}
                alt=''
                className='w-full transition-all hover:scale-105'
              />
            </div>
            <Chip className='bg-main absolute left-6 top-6 z-10 text-white'>
              Fashion
            </Chip>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-text-primary dark:text-white'>
              What Can You Do About Fashion Right Now
            </h4>
            <Info avatar={false} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative mb-6'>
            <div className='cursor-pointer overflow-hidden rounded-lg'>
              <NextImage
                src='https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/thought-catalog-640705-unsplash-1024x683.jpg'
                height={1000}
                width={1000}
                alt=''
                className='w-full transition-all hover:scale-105'
              />
            </div>
            <Chip className='bg-main absolute left-6 top-6 z-10 text-white'>
              Fashion
            </Chip>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-text-primary dark:text-white'>
              What Can You Do About Fashion Right Now
            </h4>
            <Info avatar={false} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative mb-6'>
            <div className='cursor-pointer overflow-hidden rounded-lg'>
              <NextImage
                src='https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/thought-catalog-640705-unsplash-1024x683.jpg'
                height={1000}
                width={1000}
                alt=''
                className='w-full transition-all hover:scale-105'
              />
            </div>
            <Chip className='bg-main absolute left-6 top-6 z-10 text-white'>
              Fashion
            </Chip>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-text-primary dark:text-white'>
              What Can You Do About Fashion Right Now
            </h4>
            <Info avatar={false} />
          </div>
        </SwiperSlide>

        <div className='mt-6 flex justify-center gap-2'>
          <Button
            onClick={() => swiper.slidePrev()}
            radius='full'
            isIconOnly
            size='sm'
            className='border-text-secondary hover:border-hover-text hover:text-hover-text border bg-transparent text-xl opacity-40 transition-all hover:opacity-100'
          >
            <MdKeyboardArrowLeft />
          </Button>
          <Button
            onClick={() => swiper.slideNext()}
            size='sm'
            radius='full'
            isIconOnly
            className='border-text-secondary hover:border-hover-text hover:text-hover-text border bg-transparent text-xl opacity-40 transition-all hover:opacity-100'
          >
            <MdKeyboardArrowRight />
          </Button>
        </div>
      </Swiper>
    </FrameSection>
  );
};

export default Celebration;
