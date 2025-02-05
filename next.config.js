/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
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