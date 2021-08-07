module.exports = {
  i18n: {
    locales: ["en-US", "de"],
    defaultLocale: "de",
    domains: [
      {
        domain: "localhost",
        defaultLocale: "en-US",
      },
      {
        domain: "localhost",
        defaultLocale: "de",
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
  images: {
    domains: ["banagel.herokuapp.com", "localhost"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 4400],
  },
};
