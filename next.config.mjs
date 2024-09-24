/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '/id/**',
          },
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      },
    };

export default nextConfig;
