/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  async redirects() {
    return [
      // Old WordPress slug of the About page (see also adpacc-nextjs main).
      { source: "/oadp", destination: "/o-adp", permanent: true },
    ];
  },
};

export default nextConfig;
