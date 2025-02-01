/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ec2-16-171-239-43.eu-north-1.compute.amazonaws.com',
        port: '9000',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;