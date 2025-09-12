import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize CSS only in production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 70000,
          cacheGroups: {
            styles: {
              name: "styles",
              test: /\.(css|scss)$/,
              chunks: "all",
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
