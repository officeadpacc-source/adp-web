/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old WordPress slug of the About page (see also adpacc-nextjs main).
      { source: "/oadp", destination: "/o-adp", permanent: true },
    ];
  },
};

export default nextConfig;
