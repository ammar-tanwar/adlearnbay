/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ["learnbay-wb.s3.ap-south-1.amazonaws.com"],
  },
};
