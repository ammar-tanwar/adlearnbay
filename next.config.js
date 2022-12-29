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





// module.exports = nextConfig

// eslint: {
//   ignoreDuringBuilds: true
// },