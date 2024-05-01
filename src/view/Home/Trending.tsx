import React from 'react';

import { dataBlog2 } from '@/data/mock-data';

import BigCard from '@/components/common/BigCard';
import FrameSection from '@/components/common/FrameSection';
import SmallCard from '@/components/common/SmallCard';
import TitleSection from '@/components/common/TitleSection';

const Trending = () => {
  return (
    <div className='flex flex-col gap-4'>
      <TitleSection title='Trending' />
      <FrameSection className='grid grid-cols-2 gap-8'>
        {dataBlog2.slice(0, 2).map((item) => (
          <div key={item.thumbnail} className='flex flex-col gap-6'>
            <BigCard item={item} subType='audio' />
            <div className='flex flex-col gap-4'>
              {dataBlog2.slice(0, 2).map((item) => (
                <SmallCard key={item.thumbnail} item={item} />
              ))}
            </div>
          </div>
        ))}
      </FrameSection>
    </div>
  );
};

export default Trending;
