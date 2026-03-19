/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "xhmgjzwuykrjsatrhosn.supabase.co",
      },
    ],
  },
};

export default nextConfig;
