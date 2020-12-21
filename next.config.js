const bundleAnalyzer = require('@next/bundle-analyzer');
const offline = require('next-offline');
const withPlugins = require('next-compose-plugins');

const workboxOpts = {
  swDest: 'static/service-worker.js',
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'https-calls',
        networkTimeoutSeconds: 15,
        expiration: {
          maxEntries: 150,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
  ],
};

const nextConfig = {
  generateInDevMode: false,
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest),
  workboxOpts,
};

const plugins = [
  [
    bundleAnalyzer,
    {
      enabled: process.env.ANALYZE === 'true',
    },
  ],
  [offline],
];

module.exports = withPlugins(plugins, nextConfig);
