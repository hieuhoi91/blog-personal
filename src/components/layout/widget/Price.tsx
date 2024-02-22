import { Button, Slider } from '@nextui-org/react';
import { useState } from 'react';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const Price = () => {
  const [value, setValue] = useState<number | number[]>([0, 100]);

  return (
    <FrameSection className='flex flex-col justify-center gap-6'>
      <TitleSection widget={true} title='Price' />
      <Slider
        step={10}
        minValue={0}
        maxValue={250}
        defaultValue={[0, 100]}
        formatOptions={{ style: 'currency', currency: 'USD' }}
        className='max-w-md'
        size='sm'
        value={value}
        onChange={setValue}
      />
      <div className='flex items-center justify-between'>
        <Button size='sm' radius='full' className='bg-main text-white'>
          Filter
        </Button>
        <p className='text-default-500 text-xs font-light '>
          Price :{' '}
          {Array.isArray(value) && value.map((b) => `$${b}`).join(' – ')}
        </p>
      </div>
    </FrameSection>
  );
};

export default Price;
