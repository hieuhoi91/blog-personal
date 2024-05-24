import Link from 'next/link';

import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

import { useCartStore } from '@/store/useCartStore';

const Cart = () => {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <FrameSection className='flex flex-col justify-center gap-6'>
      <TitleSection widget={true} title='Cart' />
      {totalItems > 0 ? (
        <Link href='/cart'>
          <div className='flex justify-center gap-2'>
            <span>Go to cart </span>
            <span className='text-hover-text'>({totalItems})</span>
          </div>
        </Link>
      ) : (
        <span className='text-sm opacity-70'>No product in the cart.</span>
      )}
    </FrameSection>
  );
};

export default Cart;
