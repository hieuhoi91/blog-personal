'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React from 'react';

import { ROUTES } from '@/constant';

const Admin = () => {
  const router = useRouter();
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin');
    },
  });

  const user = data?.user;

  return (
    <div className='mt-8'>
      {!user ? (
        <p>Loading ...</p>
      ) : (
        <Button>
          <Link href={ROUTES.ADMIN_BLOG}>Blog</Link>
        </Button>
      )}
    </div>
  );
};

export default Admin;
