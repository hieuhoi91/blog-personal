import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/constant';

const Admin = () => {
  return (
    <div>
      <Link href={ROUTES.CREATE}>Create</Link>
    </div>
  );
};

export default Admin;
