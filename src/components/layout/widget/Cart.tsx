import FrameSection from '@/components/common/FrameSection';
import TitleSection from '@/components/common/TitleSection';

const Cart = () => {
  return (
    <FrameSection className='flex flex-col justify-center gap-6'>
      <TitleSection widget={true} title='Cart' />
      <span className='text-sm opacity-70'>No product in the cart.</span>
    </FrameSection>
  );
};

export default Cart;
