/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: false,
    },

    reactStrictMode: false,

    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        URL_SERVER_API: process.env.URL_SERVER_API,
    },
}

module.exports = nextConfig
