const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();
const withPlugins = require('next-compose-plugins');

const isDev = process.env.NODE_ENV === 'development';

const pwa = {
  disable: isDev,
  dest: 'public',
  runtimeCaching,
};

const nextConfig = {
  pwa,
  reactStrictMode: true,
  swcMinify: true,
};

const plugins = [[withVanillaExtract], [withBundleAnalyzer], [withPWA]];

module.exports = withPlugins(plugins, nextConfig);
