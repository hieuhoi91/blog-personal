'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

import { social } from '@/components/layout/Header';
import NextImage from '@/components/NextImage';

const images: string[] = [
  'https://themeger.shop/wordpress/katen/wp-content/uploads/sb-instagram-feed-images/301425688_744703056634861_5933301700705032819_nlow.jpg',
  'https://themeger.shop/wordpress/katen/wp-content/uploads/sb-instagram-feed-images/301571069_803159457494173_7737856925578895291_nlow.jpg',
  'https://themeger.shop/wordpress/katen/wp-content/uploads/sb-instagram-feed-images/301781714_177980094732169_3092612810000707216_nlow.jpg',
  'https://themeger.shop/wordpress/katen/wp-content/uploads/sb-instagram-feed-images/301546930_743515823375636_3989247944788702757_nlow.jpg',
  'https://themeger.shop/wordpress/katen/wp-content/uploads/sb-instagram-feed-images/301678678_747957199832982_4165207138856145913_nlow.jpg',
  'https://themeger.shop/wordpress/katen/wp-content/uploads/sb-instagram-feed-images/301752884_178348868018523_6224027500536963240_nlow.jpg',
];

const Footer = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='relative grid grid-cols-6 gap-2'>
        {images.map((item) => (
          <Link key={item} href='/'>
            <NextImage
              width={500}
              height={500}
              src={item}
              alt=''
              className='h-full w-full cursor-pointer overflow-hidden rounded-lg object-cover'
            />
          </Link>
        ))}
        <Link href='/'>
          <Button
            radius='full'
            className='bg-main absolute left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 text-white'
          >
            @Katen on Instagram
          </Button>
        </Link>
      </div>
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
    </div>
  );
};

export default Footer;
