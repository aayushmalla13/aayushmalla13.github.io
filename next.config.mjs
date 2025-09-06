/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // ⬅️ static export for GitHub Pages
  trailingSlash: true,          // ⬅️ makes links like /about/ (safer on Pages)
  images: { unoptimized: true },// you already had this (good for Pages)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
