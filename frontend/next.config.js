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
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        URL_SERVER_API: process.env.URL_SERVER_API,
    },
}

module.exports = nextConfig
