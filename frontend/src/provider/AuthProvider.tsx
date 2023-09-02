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

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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