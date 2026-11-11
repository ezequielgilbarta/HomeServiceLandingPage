/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    
  },
  async redirects() {
    return [{ source: "/home", destination: "/", permanent: true }]
  },
}

export default nextConfig

