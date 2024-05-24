import Image from 'next/image';

import { products } from '@/data/mock-data';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const Products = () => {
  return (
    <FrameSection className='flex flex-col justify-center gap-6'>
      <TitleSection widget={true} title='Products' />
      <div className='flex flex-col'>
        {products.slice(0, 4).map((item) => (
          <div
            key={item.name}
            className='after:bg-border-reverse relative flex items-center justify-between gap-2 py-4 after:absolute after:top-0 after:h-[1px] after:w-full after:content-[""]'
          >
            <div className='flex flex-col items-start'>
              <h6 className='hover:text-hover-text cursor-pointer text-sm font-semibold transition-all'>
                {item.name}
              </h6>
              <span className='text-text-secondary flex flex-1 justify-end text-sm font-light'>
                ${item.price}.00
              </span>
            </div>
            <Image src={item.thumnail} alt='' width={40} height={40} />
          </div>
        ))}
      </div>
    </FrameSection>
  );
};

export default Products;
