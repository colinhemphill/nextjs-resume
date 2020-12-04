const withOffline = require('next-offline');

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
  async redirects() {
    return [
      {
        source: '/meet',
        destination: 'https://meet.google.com/zkf-hhnq-xhn',
        permanent: false,
      },
    ];
  },
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest),
  workboxOpts,
};

module.exports = withOffline(nextConfig);
