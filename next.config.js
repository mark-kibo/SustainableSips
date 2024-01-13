/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        // pathname: ['/free-photo/**','premium-photo/**']
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
        // pathname: ['/free-photo/**','premium-photo/**']
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        // pathname: ['/free-photo/**','premium-photo/**']
      },
    ],
  },
}

module.exports = nextConfig
