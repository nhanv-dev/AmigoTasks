/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: false,
    },

    reactStrictMode: false,

    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    },
}

module.exports = nextConfig
