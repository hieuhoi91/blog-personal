import React from 'react';

import { dataBlog2 } from '@/data/mock-data';

import BigCard from '@/components/common/BigCard';
import FrameSection from '@/components/common/FrameSection';
import MultipleCard from '@/components/common/MultipleCard';
import TitleSection from '@/components/common/TitleSection';

const Editor = () => {
  return (
    <div className='flex flex-col justify-start gap-6'>
      <TitleSection title="Editor's Pick" />
      <FrameSection className='grid grid-cols-2 gap-8 '>
        {dataBlog2.slice(0, 1).map((item) => (
          <BigCard subType='none' key={item.thumbnail} item={item} />
        ))}
        <MultipleCard />
      </FrameSection>
    </div>
  );
};

export default Editor;
