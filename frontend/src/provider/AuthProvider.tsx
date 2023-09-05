
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface AuthProviderType {
    user: any,
}

export const AuthContext = createContext<AuthProviderType | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthProvider must be used within a AuthProvider');
    }
    return context;
};

const AuthContextProvider: React.FC<{ children: ReactNode, pageProps: any }> = ({ children }) => {
    const [user, setUser] = useState();

    const contextValue: AuthProviderType = {
        user
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;

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
    ]
}