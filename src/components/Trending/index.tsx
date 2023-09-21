import React from 'react';

import { dataBlog2 } from '@/data/mock-data';

import BigCard from '@/components/common/BigCard';
import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const Trending = () => {
  return (
    <div>
      <TitleSection title='Trending' />
      <FrameSection className='grid grid-cols-2 gap-8'>
        {dataBlog2.slice(0, 2).map((item) => (
          <div key={item.thumbnail}>
            <BigCard item={item} subType='audio' />
          </div>
        ))}
      </FrameSection>
    </div>
  );
};

export default Trending;
