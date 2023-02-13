const withPWA = require("next-pwa")({
  dest: "public",
});
/* 
const nextConfig = {
  experimental: {
    appDir: true,
  },
};
 */
module.exports = withPWA({
  experimental: {
    appDir: true,
  },
});
