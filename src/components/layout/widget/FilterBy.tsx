import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const topic = ['Blue', 'Gray', 'Green', 'Red', 'Yellow'];

const FilterBy = () => {
  return (
    <FrameSection className='flex flex-col justify-center gap-6'>
      <TitleSection widget={true} title='Filter by' />
      <div className='flex flex-col'>
        {topic.map((item) => (
          <div
            key={item}
            className='after:bg-border-reverse relative flex items-center gap-2 py-4 after:absolute after:top-0 after:h-[1px] after:w-full after:content-[""]'
          >
            <h6 className='hover:text-hover-text cursor-pointer text-sm font-normal transition-all'>
              {item}
            </h6>
            <span className='text-text-secondary flex flex-1 justify-end text-sm font-light'>
              (2)
            </span>
          </div>
        ))}
      </div>
    </FrameSection>
  );
};

export default FilterBy;
