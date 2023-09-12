import axios from "axios";
import Cookies from "cookies";
import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


const authConfig = (req: NextApiRequest, res: NextApiResponse): NextAuthOptions => {
    return {
        session: { strategy: 'jwt' },
        jwt: { secret: 'secret' },
        pages: { signIn: "/sign-in" },
        secret: process.env.NEXTAUTH_SECRET as string,
        callbacks: {
            async jwt({ token, account, user }) {
                if (!account) return token;
                if (account.provider === 'credentials') {
                    const data: any = { ...user }
                    token = { ...token, ...data.user }
                } else {
                    token.provider = account.provider;
                }
                return token
            },
            async session({ token, session, newSession }) {
                if (!token) return session;

                if (token.provider === 'credentials') {
                    newSession = { ...token }
                } else {
                    newSession = {
                        username: session.user?.email,
                        name: session.user?.name,
                        avatar: session.user?.image,
                        provider: token.provider,
                        externalExpires: session.expires,
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
                async authorize(credentials) {
                    if (!credentials || !credentials.username || !credentials.password) return null;
                    const { username, password } = credentials;
                    const response: any = await axios.post('http://127.0.0.1:3001/api/auth/sign-in', { username, password })
                    if (!response) return null;
                    const cookies = new Cookies(req, res);
                    await cookies.set("accessToken", response.data.accessToken, {
                        httpOnly: true,
                        secure: false,
                        sameSite: "lax",
                        maxAge: 60000 * 60 * 24 * 365,
                    });
                    console.log(cookies.get('accessToken'))
                    return response.data;
                },
            }),
        ],
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    return await NextAuth(req, res, authConfig(req, res));
}



