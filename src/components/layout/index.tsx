'use client';

import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { ROUTES } from '@/constant';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { setTheme } = useTheme();
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    if (toggle) {
      setTheme('light');
      setToggle(!toggle);
    } else {
      setTheme('dark');
      setToggle(!toggle);
    }
  };

  const pathname = usePathname();
  const slug = pathname.split('/');

  const name =
    slug[slug.length - 1].charAt(0).toUpperCase() +
    slug[slug.length - 1].slice(1).replace(/-/g, ' ');

  return (
    <div className='relative'>
      <Header />
      {pathname === `${ROUTES.HOME}` && `${ROUTES.ADMIN}` ? (
        ''
      ) : (
        <div className='mb-8 flex h-40 w-full flex-col items-center justify-center bg-[#f1f8ff] text-center dark:bg-[#202b3b]'>
          <h2 className='max-w-[1200px]'>{name}</h2>
          <span className='text-text-secondary mt-2 text-sm font-light'>
            Katen / {name}
          </span>
        </div>
      )}
      <button
        className='shadow-a fixed right-0 top-1/3 z-50 flex rotate-90 cursor-pointer gap-4 rounded-full border p-2 dark:border-[#343f4c]'
        onClick={handleToggle}
      >
        <span className='opacity-0 dark:opacity-100'>
          <MdLightMode />
        </span>
        <span className='dark:opacity-0'>
          <MdDarkMode />
        </span>
      </button>
      <div className='flex w-full flex-col items-center justify-center'>
        <div
          className={`${
            pathname.includes('admin') ? 'max-w-[1600px]' : 'max-w-[1200px]'
          } `}
        >
          {children}
          {pathname.match(ROUTES.ADMIN) ? '' : <Footer />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
