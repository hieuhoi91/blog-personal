import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SpecialCard from '@/components/common/SpecialCard';
import TitleSection from '@/components/common/TitleSection';

const Inspiration = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper] = useState<any>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const s = document.querySelector('.swiper') as any;
    setSwiper(s?.swiper);
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex h-full w-full items-center justify-between'>
        <TitleSection title='Inspiration' />
        <div className='flex gap-2'>
          <Button
            onClick={() => swiper.slidePrev()}
            radius='full'
            isIconOnly
            className='border-text-secondary hover:border-hover-text hover:text-hover-text border bg-white text-xl opacity-40 transition-all hover:opacity-100'
          >
            <MdKeyboardArrowLeft />
          </Button>
          <Button
            onClick={() => swiper.slideNext()}
            radius='full'
            isIconOnly
            className='border-text-secondary hover:border-hover-text hover:text-hover-text border bg-white text-xl opacity-40 transition-all hover:opacity-100'
          >
            <MdKeyboardArrowRight />
          </Button>
        </div>
      </div>
      <Swiper
        className='swiper w-full'
        spaceBetween={24}
        slidesPerView={2}
        loop={true}
      >
        <SwiperSlide>
          <SpecialCard type={false} />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCard type={false} />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCard type={false} />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCard type={false} />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCard type={false} />
        </SwiperSlide>
        <SwiperSlide>
          <SpecialCard type={false} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Inspiration;
