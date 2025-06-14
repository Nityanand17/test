/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['*'],
  },
  transpilePackages: ["lucide-react"],
}

module.exports = nextConfig