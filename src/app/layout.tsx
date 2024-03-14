import { Poppins } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';
import '@/styles/colors.css';

import Layout from '@/components/layout';

import NextUIProviders from '@/app/providers/nextuiProviders';
import NextAuthSessionProvider from '@/app/providers/sessionProvider';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={poppins.className}>
      <body suppressHydrationWarning={true}>
        <NextAuthSessionProvider>
          <NextUIProviders>
            <Layout>{children}</Layout>
          </NextUIProviders>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
