/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignoring ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignoring TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
