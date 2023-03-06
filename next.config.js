/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.bmitch.dev',
        port: '',
        pathname: '/images/*',
      },
    ],
    unoptimized: true,
  },
  
};

module.exports = nextConfig;
