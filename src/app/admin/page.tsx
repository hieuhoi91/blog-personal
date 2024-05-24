'use client';

import React from 'react';

import withAuth from '@/components/withAuth';

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

  return <div className='w-full gap-8'>a</div>;
};

export default withAuth(Admin);
