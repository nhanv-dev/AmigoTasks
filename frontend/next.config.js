/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    compiler: {
        removeConsole: false,
    },
    modularizeImports: {
        "react-icons": {
            transform: 'react-icons/{{member}}',
        }, 
    },
    env: { 
    },
}

module.exports = nextConfig
