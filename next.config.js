const { withFaust, getWpHostname } = require("@faustwp/core");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  async headers() {
    return [
      {
        source: "/graphql",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://codinousar.site/",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
  experimental: {
    typedRoutes: false,
    appDir: false,
  },
  images: {
    domains: [
      "3.gravatar.com",
      "2.gravatar.com",
      "1.gravatar.com",
      "0.gravatar.com",
      "secure.gravatar.com",
      "images.pexels.com",
      "images.unsplash.com",
      getWpHostname(),
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: getWpHostname(),
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "1.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "2.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
});
