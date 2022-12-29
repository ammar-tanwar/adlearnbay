/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  "analyze": "ANALYZE=true next build.",
}

module.exports = {
  eslint: {
  ignoreDuringBuilds: true
},
  images: {
    domains: ["learnbay-wb.s3.ap-south-1.amazonaws.com"],
  },
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

// module.exports = withBundleAnalyzer({
//   env: {
//       NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
//   },
// })




// module.exports = nextConfig

// eslint: {
//   ignoreDuringBuilds: true
// },