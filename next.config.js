/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack(config) {
    // Add support for importing .md files as raw text
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source', // Webpack 5 feature to import file content as string
      include: path.resolve(__dirname, 'content'), // optional: limit to a folder
    });

    return config;
  },
};

module.exports = nextConfig;
