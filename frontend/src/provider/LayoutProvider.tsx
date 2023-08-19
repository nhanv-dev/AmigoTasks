import React, { createContext, useContext, useState } from 'react';

interface LayoutProviderType {
    layout: any;
    setLayout: React.Dispatch<React.SetStateAction<any>>;
}

export const LayoutContext = createContext<LayoutProviderType | undefined>(undefined);

export const useLayoutContext = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayoutProvider must be used within a LayoutProvider');
    }
    return context;
};

const LayoutContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [layout, setLayout] = useState<any>({});

    const contextValue: LayoutProviderType = {
        layout,
        setLayout,
    };

    return (
        <LayoutContext.Provider value={contextValue}>
            {children}
        </LayoutContext.Provider>
    )
};

export default LayoutContextProvider;