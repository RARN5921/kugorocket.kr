import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Note: if deploying to a subpath (e.g. username.github.io/repo-name/),
  // you must add basePath: '/repo-name' here.
};

export default nextConfig;
