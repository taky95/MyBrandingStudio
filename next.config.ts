import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
  },
  output: 'standalone', // Important for Docker
};

export default nextConfig;
