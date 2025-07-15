/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagens.metricasboss.com.br",
      },
    ],
  },
};

export default nextConfig;