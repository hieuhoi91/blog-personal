'use client';

import { Button, Select, SelectItem } from '@nextui-org/react';
import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

import { products } from '@/data/mock-data';

import Product from '@/components/common/Product';
import Cart from '@/components/layout/widget/Cart';
import Categories from '@/components/layout/widget/Categories';
import FilterBy from '@/components/layout/widget/FilterBy';
import Price from '@/components/layout/widget/Price';
import Products from '@/components/layout/widget/Products';

const sort = [
  { name: 'Sort by price: low to high', order: 'asc' },
  { name: 'Sort by price: high to low', order: 'desc' },
];

const Page = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [data, setData] = useState(products);
  const [sortOrder, _] = useState('asc');

  const totalRows = products.length;
  const limit = 12;
  const totalPages = Math.ceil(totalRows / limit);
  const beginRows = limit * (pageIndex - 1);
  const endRows = limit * pageIndex;

  const handlePages = (page: number) => {
    setPageIndex(page);
  };

  const sortDataByPrice = (order: string) => {
    const sortedData = [...data].sort((a, b) => {
      if (a.price < b.price) {
        return sortOrder === order ? -1 : 1;
      }
      if (a.price > b.price) {
        return sortOrder === order ? 1 : -1;
      }
      return 0;
    });
    setData(sortedData);
  };

  return (
    <div className='mt-16 grid grid-cols-4 gap-8'>
      <div className='col-span-3 flex flex-col'>
        <div className='mb-8 flex items-start justify-between'>
          <span className='text-text-secondary text-sm font-light'>
            Showing {beginRows + 1} -{' '}
            {endRows > totalRows ? totalRows : endRows} of {totalRows} results
          </span>
          <div className='flex flex-col gap-2'>
            <div className='mb-6 flex w-full flex-wrap items-end gap-4 md:mb-0 md:flex-nowrap'>
              <Select
                labelPlacement='inside'
                defaultSelectedKeys={['Sort by price: low to high']}
                className='w-[260px]'
                color='primary'
              >
                {sort.map((value) => (
                  <SelectItem
                    key={value.name}
                    value={value.name}
                    onClick={() => sortDataByPrice(value.order)}
                  >
                    {value.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-3 gap-8'>
            {data.slice(beginRows, endRows).map((product) => (
              <Product key={product.name} product={product} />
            ))}
          </div>
          <div className='flex gap-2'>
            <Button
              className='border-text-secondary flex h-12 w-12 items-center justify-center border bg-transparent opacity-40'
              isIconOnly
              radius='full'
              isDisabled={pageIndex <= 1}
            >
              <MdOutlineKeyboardArrowLeft
                size={24}
                onClick={() => {
                  handlePages(pageIndex - 1);
                }}
              />
            </Button>
            {Array(totalPages)
              .fill(null)
              .map((_, idx) => (
                <button
                  className={`${
                    idx + 1 === pageIndex
                      ? 'bg-main border-transparent text-white'
                      : 'border-text-secondary bg-transparent opacity-40 hover:opacity-100'
                  }  h-12 w-12 rounded-full border`}
                  key={idx}
                  onClick={() => handlePages(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
            <Button
              className='border-text-secondary flex h-12 w-12 items-center justify-center border bg-transparent opacity-40'
              onClick={() => {
                handlePages(pageIndex + 1);
              }}
              isIconOnly
              radius='full'
              isDisabled={pageIndex >= totalPages}
            >
              <MdOutlineKeyboardArrowRight size={24} />
            </Button>
          </div>
        </div>
      </div>
      <div className='col-span-1 flex flex-col gap-8'>
        <Cart />
        <Price />
        <FilterBy />
        <Categories />
        <Products />
      </div>
    </div>
  );
};

export default Page;
