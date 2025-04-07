const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/WawawaProject-website/" : "",
  basePath: isProd ? "/WawawaProject-website" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
