import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  poweredByHeader: false,
  // Single broker: the team page goes straight to his profile.
  async redirects() {
    return [{ source: "/corretores", destination: "/corretores/horacio-santini", permanent: false }];
  },
  partialPrefetching: true,
  experimental: {
    // Lets `next dev`/`next build` nudge security-only upgrades (set by the 16.4.3 → 16.4.6 upgrade).
    agentUpgrade: "security",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
