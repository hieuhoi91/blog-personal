import { Button, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import { IProduct } from '@/data/mock-data';

import { useCartStore } from '@/store/useCartStore';

import ModalAuth from '@/view/Auth/ModalAuth';

const Product = ({ product }: { product: IProduct }) => {
  const [blur, setBlur] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const session = useSession();

  const addProduct = useCartStore((state) => state.addToCart);

  const handleAddProduct = (product: IProduct) => {
    if (session.status === 'unauthenticated') {
      onOpen();
    } else {
      addProduct(product);
      toast.success('Add product success!');
    }
  };

  return (
    <div
      className='relative mb-8'
      onMouseEnter={() => setBlur(true)}
      onMouseLeave={() => setBlur(false)}
    >
      <Image
        className=' mb-6 rounded-xl'
        width={300}
        height={300}
        src={product.thumnail}
        alt=''
      />
      <h5 className='mb-2 text-base font-bold'>{product.name}</h5>
      <div className='text-sm font-extralight'>
        {product.price && product.sale ? (
          <del className='pr-2'>${product.price}.00</del>
        ) : (
          <span>${product.price}.00</span>
        )}
        {product.sale ? <span>${product.sale}.00</span> : ''}
      </div>
      {blur ? (
        <Button
          className='absolute right-4 top-4'
          isIconOnly
          radius='full'
          size='sm'
          color='warning'
          onClick={() => handleAddProduct(product)}
        >
          <MdOutlineAdd />
        </Button>
      ) : (
        ''
      )}
      <ModalAuth
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    </div>
  );
};

export default Product;
