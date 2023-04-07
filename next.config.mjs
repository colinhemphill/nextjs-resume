/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, typedRoutes: true },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
