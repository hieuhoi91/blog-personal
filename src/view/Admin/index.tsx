'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/constant';

const Admin = () => {
  return (
    <div className='mt-8'>
      <Button>
        <Link href={ROUTES.ADMIN_BLOG}>Blog</Link>
      </Button>
    </div>
  );
};

export default Admin;
