import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import type { Adapter } from 'next-auth/adapters';
import Auth0Provider from "next-auth/providers/auth0";
//import GithubProvider from "next-auth/providers/github";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    // GithubProvider({
    // 	clientId: process.env.GITHUB_ID,
    // 	clientSecret: process.env.GITHUB_SECRET,
    // }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
      issuer: process.env.AUTH0_ISSUER as string,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
