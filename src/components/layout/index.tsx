import React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
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
