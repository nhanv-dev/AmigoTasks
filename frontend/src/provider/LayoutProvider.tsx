import React, { ReactNode, createContext, useContext, useState } from 'react';

interface Layout {
    isOpenSidebar?: boolean;
    contentSidebar?: ReactNode | null;
}

interface LayoutProviderType {
    isOpenSidebar: boolean;
    contentSidebar: ReactNode | null;
    setLayout: React.Dispatch<React.SetStateAction<Layout>>;
}

export const LayoutContext = createContext<LayoutProviderType | undefined>(undefined);

export const useLayoutContext = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayoutProvider must be used within a LayoutProvider');
    }
    return context;
};

const LayoutContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
    const [contentSidebar, setContentSidebar] = useState<ReactNode | null>(null);

    const setLayout = ({ isOpenSidebar, contentSidebar }: Layout) => {
        if (isOpenSidebar === true || isOpenSidebar === false) setIsOpenSidebar(isOpenSidebar)

        setContentSidebar(contentSidebar)
    }

    const contextValue: LayoutProviderType = { isOpenSidebar, contentSidebar, setLayout };

    return (
        <LayoutContext.Provider value={contextValue}>
            {children}
        </LayoutContext.Provider>
    )
};

export default LayoutContextProvider;