/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone', // Garante que o build seja compatível com a Vercel
};

module.exports = nextConfig;