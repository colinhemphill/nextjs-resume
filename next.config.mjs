import bundleAnalyzer from '@next/bundle-analyzer';
import withPlugins from 'next-compose-plugins';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, runtime: 'nodejs' },
  reactStrictMode: true,
  swcMinify: true,
};

const plugins = [[withBundleAnalyzer]];

export default withPlugins(plugins, nextConfig);
