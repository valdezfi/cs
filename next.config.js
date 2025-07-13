/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['grandeapp.com'], // Add any external domains you want to allow images from
  },
  webpack(config) {
    // Add support for loading .md files as raw content
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });

    return config;
  },
};

module.exports = nextConfig;
