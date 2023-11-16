'use client';

// import dynamic from 'next/dynamic';
import Head from 'next/head';
import * as React from 'react';

import { Home } from '@/view';

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <Home />
    </main>
  );
}
