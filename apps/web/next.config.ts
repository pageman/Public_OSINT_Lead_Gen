import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@osint-lead-gen/shared"]
};

export default nextConfig;
