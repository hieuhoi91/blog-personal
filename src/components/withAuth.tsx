import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';

const withAuth = (Component: any) => {
  return function WithAuth(props: any) {
    const { data, status } = useSession();

    useEffect(() => {
      if (status === 'unauthenticated') {
        redirect('/');
      }
    }, [status]);

    if (!data) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
