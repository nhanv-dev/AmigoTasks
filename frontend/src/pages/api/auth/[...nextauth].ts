
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const authConfig: NextAuthOptions = {
    session: { strategy: 'jwt' },
    jwt: { secret: 'secret' },
    pages: { signIn: "/sign-in" },
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
        async jwt({ token, account, user }) {
            if (!account) return token;
            if (account.provider === 'google' || account.provider === 'github') {
                token.accessToken = account.access_token
                token.provider = account.provider;
            }
            if (account.provider === 'credentials') {
                const data: any = { ...user }
                token.accessToken = data.accessToken;
                token.provider = account.provider;
                token.user = data.user;
            }
            return token
        },
        async session({ token, session, newSession }) {
            if (token) {
                if (token.provider === 'credentials') {
                    const data: any = { ...token };
                    newSession = { ...data.user }
                    // newSession = {
                    //     username: session.user?.email,
                    //     name: session.user?.name,
                    //     avatar: session.user?.image,
                    //     provider: token.provider,
                    //     externalExpires: session.expires,
                    // }
                } else {
                    newSession = {
                        username: session.user?.email,
                        name: session.user?.name,
                        avatar: session.user?.image,
                        provider: token.provider,
                        externalExpires: session.expires,
                    }
                }
            }
            return newSession;
        },
    },

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.username || !credentials.password) return null;
                const { username, password } = credentials;
                const action: any = await axios.post('http://localhost:3001/api/auth/sign-in', { username, password })
                if (action) return action.data
                return null;
            },
        }),
    ],
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    return await NextAuth(req, res, authConfig);
}



