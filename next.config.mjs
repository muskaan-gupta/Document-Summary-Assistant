/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: "C:\\Users\\hp\\OneDrive\\Documents\\document-summary-assistant",

  webpack: (config) => {
    // Fix for PDF.js in Next.js
    config.resolve.alias.canvas = false;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
