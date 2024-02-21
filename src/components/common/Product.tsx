import Image from 'next/image';
import React from 'react';

import { IProduct } from '@/data/mock-data';

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className='mb-8'>
      <Image
        className='mb-6 rounded-xl'
        width={300}
        height={300}
        src={product.thumnail}
        alt=''
      />
      <h5 className='mb-2 text-base font-bold'>{product.name}</h5>
      <div className='text-sm font-extralight'>
        {product.price && product.sale ? (
          <del className='pr-2'>${product.price}</del>
        ) : (
          <span>${product.price}</span>
        )}
        {product.sale ? <span>${product.sale}</span> : ''}
      </div>
    </div>
  );
};

export default Product;
