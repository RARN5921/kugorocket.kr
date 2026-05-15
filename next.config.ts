import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Allow the proxy to access the dev server if needed
  experimental: {
    allowedHosts: ['all'],
  } as any,
  // Note: if deploying to a subpath (e.g. username.github.io/repo-name/),
  // you must add basePath: '/repo-name' here.
};

export default nextConfig;
