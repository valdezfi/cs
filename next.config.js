// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack(config) {
//     // Add support for loading .md files as raw content
//     config.module.rules.push({
//       test: /\.md$/,
//       type: 'asset/source', // Use Webpack's asset module for raw file content
//     });

//     return config;  // Don't forget to return the modified config
//   },
// };

// module.exports = nextConfig;


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
