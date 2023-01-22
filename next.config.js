/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.pokemondb.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
