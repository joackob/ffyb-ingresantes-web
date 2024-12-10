// https://medium.com/@imvinojanv/the-complete-guide-to-building-progressive-web-apps-with-next-js-f37b4bb878cd
/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import createPWA from "next-pwa";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

const withPWA = createPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true, // register the PWA service worker
  skipWaiting: true, // skip waiting for service worker activation
  exclude: [
    // add buildExcludes here
    ({ asset }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/,
        )
      ) {
        return true;
      }
      if (
        process.env.NODE_ENV !== "production" &&
        !asset.name.startsWith("static/runtime/")
      ) {
        return true;
      }
      return false;
    },
  ],
});

const withMDX = createMDX({
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
});

const config = {
  // config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true, // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

export default withMDX(withPWA(config));
