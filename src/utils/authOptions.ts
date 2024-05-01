import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { BlogApi } from '@/api/blog-api';
import { ResLogin } from '@/shared/type';

async function refreshAccessToken(refreshToken: string) {
  try {
    const token = await BlogApi.refresh_token(refreshToken);
    const data = token.data;

    return {
      accessToken: data.accessToken,
      expiresIn: data.expiresIn,
      refreshToken: data.refreshToken, // Fall back to old refresh token
    };
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.log('error', error.data);

    return {
      refreshToken,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const data: ResLogin = await BlogApi.login({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          email: credentials!.email,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          password: credentials!.password,
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return data as any;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: any) {
      // Initial sign in
      if (user) {
        const currentDate = new Date();
        token.user = user;
        token.refreshToken = user.token.refreshToken;
        token.expiresIn = currentDate.setTime(
          currentDate.getTime() + 60 * 60 * 1000
        );

        return token;
      }

      if (token && Date.now() < token.expiresIn) {
        return token;
      }

      const a = refreshAccessToken(token.refreshToken);
      return a;
    },
    async session({ session, token }) {
      if (token) {
        session = token.user as any;

        // session.error = token.error;
        return session;
      }

      return session;
    },
  },
  // The signIn page is the page that the user is redirected to when they are not logged in.

  secret: 'next-auth-secret',
};
