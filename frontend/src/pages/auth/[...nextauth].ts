
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';

// const handler = NextAuth(authConfig)
// export { handler as GET, handler as POST }

export const authConfig: NextAuthOptions = {

    providers: [

        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",

                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials, req) {
                if (!credentials || !credentials.email || !credentials.password) return null;
                const { email, password } = credentials;
                console.log(email, password)
                const user = {
                    fullName: 'Trần Thanh Nhân',
                    email: 'tthanhnhan1512@gmail.com',
                    password: '1512',
                }
                console.log(user)
                return null;
            },
        }),
        GoogleProvider({
            // clientId: process.env.GOOGLE_CLIENT_ID as string,
            // clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            clientId: '3388544933-seaart9vib50m9eoj3ijpbhkh61hm2eg.apps.googleusercontent.com',
            clientSecret: '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',
        })
    ],
    pages: {
        signIn: "/sign-in",
    },
    secret: process.env.NEXTAUTH_SECRET as string,
}

export default NextAuth({
    session: { strategy: 'jwt' },
    ...authConfig
})