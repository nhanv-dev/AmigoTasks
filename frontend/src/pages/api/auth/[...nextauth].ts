
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req?.query?.nextauth?.includes("callback") && req.method === "POST") {
        console.log("Handling callback request from my Identity Provider", req.body)
    }

    const authConfig: NextAuthOptions = {
        session: { strategy: 'jwt' },
        jwt: { secret: 'secret' },
        pages: { signIn: "/sign-in" },
        secret: process.env.NEXTAUTH_SECRET as string,
        callbacks: {

            async session({ token, user, session, newSession }) {
                if (token) {
                    newSession = {
                        username: session.user?.email,
                        name: session.user?.name,
                        avatar: session.user?.image,
                        provider: 'external',
                        externalExpires: session.expires,
                    }
                }
                console.log('session', user, token, session)
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
                    const response: any = { user: action.data };
                    if (action) return response
                    return null;
                },
            }),
        ],
    }

    return await NextAuth(req, res, authConfig);
}



