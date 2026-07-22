/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: {
    // Allow higher-quality rendering for hero photos (default is 75).
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // Old WordPress slug of the About page (see also adpacc-nextjs main).
      { source: "/oadp", destination: "/o-adp", permanent: true },
    ];
  },
};

export default nextConfig;
