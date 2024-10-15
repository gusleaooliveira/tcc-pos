/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'darcio-flix-api-production.up.railway.app',
        port: '',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;
