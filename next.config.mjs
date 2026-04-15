/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://randomuser.me/api/portraits/women/44.jpg
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
