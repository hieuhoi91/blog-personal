import React from 'react';

import Celebration from '@/components/layout/widget/Celebration';
import ExploreTopic from '@/components/layout/widget/ExploreTopic';
import Introduce from '@/components/layout/widget/Introduce';
import Newsletter from '@/components/layout/widget/Newsletter';
import PopularPost from '@/components/layout/widget/PopularPost';
import TagClouds from '@/components/layout/widget/TagClouds';

const Widget = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Introduce />
      <PopularPost />
      <ExploreTopic />
      <Newsletter />
      <Celebration />
      <TagClouds />
    </div>
  );
};

export default Widget;
