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

  async redirects() {
    return [
      {
        source: '/domain/hr/data-driven-HR-analytics',
        destination: '/info-webinar',
        permanent: true,
      },
    ]
  },
};
