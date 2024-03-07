'use client';

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import FrameSection from '@/components/common/FrameSection';

import { useCartStore } from '@/store/useCartStore';

import Tables from '@/view/Cart/Table';

const Cart = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <div className='flex flex-col items-end'>
      <Tables />
      <div className='mt-16 flex w-full items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='border-text-secondary flex h-[40px] w-36 justify-center rounded-full border dark:border-none'>
            <input
              type='text'
              className='w-full rounded-full border-0 px-6 text-center text-sm focus:ring-0 dark:text-black'
              placeholder='Coupon code'
            />
          </div>
          <Button radius='full' className='bg-main text-white'>
            Apply coupon
          </Button>
        </div>
        {/* <div>
          <Button radius='full' className='bg-main text-white'>
            Update cart
          </Button>
        </div> */}
      </div>
      <div className=' mt-8 flex w-1/2 flex-col gap-6'>
        <h1>Cart total</h1>
        <FrameSection className='!bg-transparent !p-0'>
          <Table
            shadow='none'
            hideHeader
            aria-label='Example static collection table'
          >
            <TableHeader>
              <TableColumn>NAME</TableColumn>
              <TableColumn>PRICE</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key='1' className='border-b'>
                <TableCell className='font-bold'>Subtotal</TableCell>
                <TableCell> ${totalPrice}.00</TableCell>
              </TableRow>
              <TableRow key='2'>
                <TableCell className='font-bold'>Total</TableCell>
                <TableCell className='font-bold'> ${totalPrice}.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </FrameSection>

        <Button size='lg' className='bg-main text-white' radius='full'>
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
