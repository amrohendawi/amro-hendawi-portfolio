import { createServer } from 'http'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

// Function to find next available port
export async function findAvailablePort(startPort = 3000) {
  return new Promise((resolve, reject) => {
    const server = createServer()
    
    server.listen(startPort, () => {
      const port = server.address()?.port
      server.close(() => resolve(port))
    })
    
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(startPort + 1))
      } else {
        reject(err)
      }
    })
  })
}
