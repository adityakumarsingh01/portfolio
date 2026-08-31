import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.56.1'],
  serverExternalPackages: ['better-sqlite3', '@prisma/adapter-better-sqlite3'],
  serverActions: {
    bodySizeLimit: '10mb',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
export default nextConfig;
