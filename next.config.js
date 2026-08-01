/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },
  images: {
    qualities: [60, 75, 100], // ← add 100
    deviceSizes: [390, 768, 1080, 1920],
    imageSizes: [128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/course/:id",
        destination: "/course-details/:id",
        permanent: true,
      },
      {
        source: "/blogs/:id",
        destination: "/blog-details/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
