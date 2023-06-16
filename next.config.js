/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shuaibuportfolio.netlify.app',
        port: '',
        pathname: '/src/**',
      },
      {
        protocol: 'https',
        hostname: 'external-content.duckduckgo.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};
