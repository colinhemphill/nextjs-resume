const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPlugins = require('next-compose-plugins');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  reactStrictMode: true,
  swcMinify: true,
};

const plugins = [[withBundleAnalyzer]];

module.exports = withPlugins(plugins, nextConfig);
