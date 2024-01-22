const withNextIntl = require("next-intl/plugin")(
  "./src/services/internationalization/i18n.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        destination: "/",
        permanent: true,
        source: "/main",
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
