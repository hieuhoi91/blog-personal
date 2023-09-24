import { Button } from '@nextui-org/react';
import React from 'react';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const tag = [
  'Audio',
  'Content',
  'Featured',
  'Image',
  'Inspiration',
  'Lifestyle',
  'Photo',
  'Pick',
  'Slide',
  'Trending',
];

const TagClouds = () => {
  return (
    <FrameSection className='flex flex-col gap-4'>
      <TitleSection widget title='Tag Clouds' />
      <div className='flex flex-wrap gap-2'>
        {tag.map((item) => (
          <Button
            radius='full'
            size='sm'
            className='text-text-secondary border bg-transparent'
            key={item}
          >
            #{item}
          </Button>
        ))}
      </div>
    </FrameSection>
  );
};

export default TagClouds;
