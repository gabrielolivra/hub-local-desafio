import type { NextConfig } from 'next';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});


const baseConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['icon-library'],
    authInterrupts: true,
  },
  serverExternalPackages: ['newrelic'],
  reactStrictMode: false,
};

const configWithAnalyzer = withBundleAnalyzer(baseConfig);

export default configWithAnalyzer;
