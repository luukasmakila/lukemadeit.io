import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the normal Next.js server build for local development.
  ...(process.env.GITHUB_PAGES === "true" && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
