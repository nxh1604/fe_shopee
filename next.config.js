/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fakestoreapi.com",
        protocol: "https",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/account",
        destination: "/account/profile",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
