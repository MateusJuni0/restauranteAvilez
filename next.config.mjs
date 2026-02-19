/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['three', '@react-three/drei', '@react-three/fiber', 'three-stdlib'],
};

export default nextConfig;
