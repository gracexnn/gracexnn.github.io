/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/gracexnn.github.io',
    assetPrefix: '/gracexnn.github.io/',
    exportPathMap: async function () {
        return {
          '/': { page: '/' },
          // Add other pages as needed
        };
    },
}

module.exports = nextConfig
