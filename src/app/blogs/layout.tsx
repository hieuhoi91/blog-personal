import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
