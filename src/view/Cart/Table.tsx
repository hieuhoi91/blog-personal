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
import Image from 'next/image';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdOutlineAdd, MdRemove } from 'react-icons/md';

import { IProduct } from '@/data/mock-data';

import FrameSection from '@/components/common/FrameSection';

import { useCartStore } from '@/store/useCartStore';

const columns = [
  {
    key: 'delete',
    lable: '',
  },
  {
    key: 'thumnail',
    label: '',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'price',
    label: 'Price',
  },
  {
    key: 'quantity',
    label: 'Quantity',
  },
  {
    key: 'subtotal',
    label: 'Subtotal',
  },
];

const Tables = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(['2']));

  const cart = useCartStore((state) => state.cart);
  const incrementProduct = useCartStore((state) => state.incrementQuantity);
  const decrementProduct = useCartStore((state) => state.decrementQuantity);
  const deleteProduct = useCartStore((state) => state.removeFromCart);

  const handleDecrementProduct = (item: IProduct) => {
    if (item.quantity > 1) {
      decrementProduct(item);
    } else {
      deleteProduct(item);
    }
  };

  return (
    <FrameSection className='w-full !p-0'>
      <Table
        classNames={{ tbody: 'bg-transparent' }}
        aria-label='Controlled table example with dynamic content'
        shadow='none'
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={cart}>
          {(item) => (
            <TableRow key={item.name}>
              <TableCell>
                <button
                  onClick={() => deleteProduct(item)}
                  className='hover:bg-hover-text text-hover-text flex h-6 w-6 items-center justify-center rounded-full transition-all hover:text-white'
                >
                  <IoClose size={16} />
                </button>
              </TableCell>
              <TableCell>
                <Image src={item.thumnail} alt='' width={32} height={32} />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>${item.price}.00</TableCell>
              <TableCell className='flex items-center gap-2'>
                <Button
                  isIconOnly
                  radius='full'
                  size='sm'
                  color='primary'
                  variant='bordered'
                  onClick={() => handleDecrementProduct(item)}
                >
                  <MdRemove />
                </Button>
                <div className='border-text-secondary flex h-[40px] w-16 justify-center rounded-full border dark:border-none'>
                  <input
                    type='number'
                    className='w-full rounded-full border-0 px-6 text-center text-sm focus:ring-0 dark:text-black'
                    min='1'
                    max='50'
                    value={item.quantity}
                  />
                </div>
                <Button
                  isIconOnly
                  radius='full'
                  size='sm'
                  color='primary'
                  variant='bordered'
                  onClick={() => incrementProduct(item)}
                >
                  <MdOutlineAdd />
                </Button>
              </TableCell>
              <TableCell>${item.price * item.quantity}.00</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </FrameSection>
  );
};

export default Tables;
