'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

import withAuth from '@/components/withAuth';

import { ROUTES } from '@/constant';

const Admin = () => {
  // const router = useRouter();
  // const { data } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.push('/');
  //   },
  // });

  // const user = data?.user;
  // console.log(data);

  return (
    <div className='mt-8'>
      <Button>
        <Link href={ROUTES.ADMIN_BLOG}>Blog</Link>
      </Button>
    </div>
  );
};

export default withAuth(Admin);
