'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

import { social } from '@/components/layout/Header';

const Footer = () => {
  return (
    <div className='grid h-[120px] w-full grid-cols-3 border-t'>
      <span className='col-span-1 flex items-center'>
        @2023 Katen. Theme by ThemeGer
      </span>
      <div className='col-span-1 flex items-center justify-center gap-4'>
        {social.map((item) => (
          <Link key={item.href} href={item.href}>
            <span className='hover:text-secondary text-xl'>{item.icon}</span>
          </Link>
        ))}
      </div>
      <span className='col-span-1 flex items-center justify-end'>
        <Button
          color='secondary'
          variant='bordered'
          startContent={<MdKeyboardArrowUp className='text-xl' />}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to top
        </Button>
      </span>
    </div>
  );
};

export default Footer;
