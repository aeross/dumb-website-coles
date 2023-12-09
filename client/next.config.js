/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                key: "Access-Control-Allow-Origin",
                value: "https://dumb-website-grocery-store.vercel.app/",
            },
            {
                key: "Access-Control-Allow-Credentials",
                value: "true",
            },
            {
                key: "Access-Control-Allow-Methods",
                value: "GET, POST, PATCH, DELETE, PUT, OPTIONS",
            },
            {
                key: "Access-Control-Allow-Headers",
                value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
        ];
    },
};

module.exports = nextConfig;
