import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import LayoutAdmin from '@/components/layout/layout-admin';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutAdmin>{children}</LayoutAdmin>;
}
