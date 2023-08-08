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
      {
        source: '/thank-you-webinar',
        destination: '/Thank-you-ds-webinar',
        permanent: true,
      },
      {
        source: '/advance-ai-ml-certification',
        destination: '/datascience/advance-ai-ml-certification',
        permanent: true,
      },
      {
        source: '/business-analytics-certification-course',
        destination: '/datascience/business-analytics-certification-course',
        permanent: true,
      },
      {
        source: '/data-analytics-certification-course',
        destination: '/datascience/data-analytics-certification-course',
        permanent: true,
      },
      {
        source: '/data-science-ai-cert-for-managers-leaders',
        destination: '/datascience/data-science-ai-cert-for-managers-leaders',
        permanent: true,
      },
      {
        source: '/data-science-ai-masters-program',
        destination: '/datascience/data-science-ai-masters-program',
        permanent: true,
      },
      {
        source: '/data-science-certification-courses',
        destination: '/datascience/data-science-certification-courses',
        permanent: true,
      },
      {
        source: '/dsa',
        destination: '/fullstack/dsa',
        permanent: true,
      },
      {
        source: '/fssd',
        destination: '/fullstack/fssd',
        permanent: true,
      },
    ]
  },
};
