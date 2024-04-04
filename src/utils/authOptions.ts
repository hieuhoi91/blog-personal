import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';

import { BlogApi } from '@/api/blog-api';
import { ResLogin } from '@/shared/type';

async function refreshAccessToken(refreshToken: JWT) {
  try {
    const token = await BlogApi.refresh_token(refreshToken);

    const data = token.data;

    return {
      accessToken: data.accessToken,
      expiresIn: data.expiresIn,
      refreshToken: data.refreshToken ?? refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

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

  session: {
    // Đặt thời gian mặc định cho session (ở đây là 1h)
    maxAge: 2 * 60 * 60,
    // Cấu hình đánh dấu session là có thể được làm mới tự động
    // Khi session sắp hết hạn, NextAuth sẽ tự động làm mới session mà không cần đăng nhập lại
    strategy: 'jwt',
    updateAge: 24 * 60 * 60, // 24 hours
  },

  callbacks: {
    async jwt({ token, user }: any) {
      // Initial sign in
      if (user) {
        const currentDate = new Date();
        token.user = user;
        token.expiresIn = currentDate.setTime(currentDate.getTime() + 60 * 60);
        return token;
      }

      if (token && Date.now() < token.expiresIn) {
        return token;
      }

      return refreshAccessToken(token);
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
