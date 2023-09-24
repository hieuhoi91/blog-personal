import { MdKeyboardArrowRight } from 'react-icons/md';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const topic = [
  'Celebration',
  'Culture',
  'Fashion',
  'Inspiration',
  'Lifestyle',
  'Politic',
  'Trending',
];

const ExploreTopic = () => {
  return (
    <FrameSection className='flex flex-col justify-center gap-6'>
      <TitleSection widget={true} title='Explore Topics' />
      <div className='flex flex-col'>
        {topic.map((item) => (
          <div
            key={item}
            className='after:bg-border-reverse relative flex items-center gap-2 py-4 after:absolute after:top-0 after:h-[1px] after:w-full after:content-[""]'
          >
            <MdKeyboardArrowRight className='text-hover-text text-2xl' />
            <h6 className='hover:text-hover-text cursor-pointer text-sm font-bold transition-all'>
              {item}
            </h6>
            <span className='text-text-secondary flex flex-1 justify-end'>
              (2)
            </span>
          </div>
        ))}
      </div>
    </FrameSection>
  );
};

export default ExploreTopic;
