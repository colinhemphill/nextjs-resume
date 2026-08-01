import { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
  experimental: { useTypeScriptCli: true },
  reactStrictMode: true,
  reactCompiler: true,
  turbopack: {},
};

export default withContentlayer(nextConfig);
