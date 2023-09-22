import React from 'react';

import { dataBlog2 } from '@/data/mock-data';

import BigCard from '@/components/common/BigCard';
import FrameSection from '@/components/common/FrameSection';
import SmallCard from '@/components/common/SmallCard';
import TitleSection from '@/components/common/TitleSection';

const Editor = () => {
  return (
    <div className='flex flex-col justify-start gap-6'>
      <TitleSection title="Editor's Pick" />
      <FrameSection className='grid grid-cols-2 gap-8 '>
        {dataBlog2.slice(0, 1).map((item) => (
          <BigCard subType='none' key={item.thumbnail} item={item} />
        ))}
        <div className='grid grid-rows-4 gap-4'>
          {dataBlog2.slice(0, 4).map((item) => (
            <SmallCard key={item.thumbnail} item={item} />
          ))}
        </div>
      </FrameSection>
    </div>
  );
};

export default Editor;
