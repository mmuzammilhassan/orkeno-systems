import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },
  turbopack: {},

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui.shadcn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Headers for better security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Custom Signature Headers 🚀
          {
            key: 'X-Made-With',
            value: 'Love',
          },
          {
            key: 'X-Developer',
            value: 'Muzammil Hassan (https://github.com/mmuzammilhassan)',
          },
          {
            key: 'X-Developer-Contact',
            value: 'mmuzammilhassan24@gmail.com',
          },
        ],
      },
    ];
  },

  // Redirects for better SEO
  // async redirects() {
  //   return [
  //     {
  //       source: '/home',
  //       destination: '/dashboard',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
