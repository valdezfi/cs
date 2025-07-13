/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Only needed if using remote (CDN) images
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
      include: path.resolve(__dirname, 'content'), // optional
    });
    return config;
  },
};

module.exports = nextConfig;
