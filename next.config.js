module.exports = {
  reactStrictMode: true,
  target: "experimental-serverless-trace",

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
