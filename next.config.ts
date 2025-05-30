/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // or specify domains like 'cdn.pixabay.com'
      },
    ],
    // OR, for older Next.js:
    // domains: ['cdn.pixabay.com', 'media-bom2-3.cdn.whatsapp.net', ...],
    unoptimized: true // <-- Add this for static export!
  },
  // ...other config options...
};

export default nextConfig;
