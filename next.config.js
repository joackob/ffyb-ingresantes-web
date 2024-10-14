/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "DEV",
});

const config = {
  // config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

module.exports = withPWA(config);
