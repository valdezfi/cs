/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add support for loading .md files as raw content
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source', // Use Webpack's asset module for raw file content
    });

    return config;  // Don't forget to return the modified config
  },
};

module.exports = nextConfig;
