import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // the home directory above this project has its own lockfile; pin the root here
  turbopack: { root: process.cwd() },
};

export default nextConfig;
