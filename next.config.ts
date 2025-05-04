import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wp.mybrandingstudio.ca",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: 'standalone', // Important for Docker
};

export default nextConfig;
