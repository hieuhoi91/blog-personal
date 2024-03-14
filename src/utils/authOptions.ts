import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { BlogApi } from '@/api/blog-api';
import { ResLogin } from '@/shared/type';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const data: ResLogin = await BlogApi.login({
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            email: credentials!.email,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            password: credentials!.password,
          }).then((res) => res.data);

          if (data) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return data as any;
          }
          return null;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);

      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session = token.user as any;
      return session;
    },
  },
  // The signIn page is the page that the user is redirected to when they are not logged in.

  secret: 'next-auth-secret',
};
