/** @type {import('next').NextConfig} */
const nextConfig = {
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
