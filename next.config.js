const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  webpack: (config, { dev }) => {
    // Replace React with Preact only in client production build
    if (!dev) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
        "react/jsx-runtime": "preact/jsx-runtime",
      });
    }

    return config;
  },
  experimental: {
    modern: true,
  },
  target: "serverless",
});
