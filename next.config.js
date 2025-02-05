/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.alenafrica.org',
        port: '9000',
        pathname: '/**',
      },
    ],
  },
};
module.exports = nextConfig;