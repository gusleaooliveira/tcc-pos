/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
