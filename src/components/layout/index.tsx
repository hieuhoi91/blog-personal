'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  const slug = pathname.split('/');

  const name =
    slug[slug.length - 1].charAt(0).toUpperCase() +
    slug[slug.length - 1].slice(1);

  return (
    <div>
      <Header />
      {pathname === '/' ? (
        ''
      ) : (
        <div className='mb-16 flex h-40 w-full flex-col items-center justify-center bg-[#f1f8ff] dark:bg-[#202b3b]'>
          <h2>{name}</h2>
          <span className='text-text-secondary mt-2 text-sm font-light'>
            Katen / {name}
          </span>
        </div>
      )}
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='w-full max-w-[1200px]'>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
