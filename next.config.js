/** @type {import('next').NextConfig} */
const nextConfig = {
  // lets a production build run in a separate folder (e.g. NEXT_DIST_DIR=.next-prod) without touching the dev server's .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
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
  // Next 15 streams metadata into <body> for non-bot user agents; Lighthouse and some
  // crawlers then report "no meta description". Always render metadata in <head>.
  htmlLimitedBots: /.*/,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
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
