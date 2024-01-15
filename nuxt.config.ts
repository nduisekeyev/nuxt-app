// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/devtools", "@nuxtjs/i18n"],
  devtools: { enabled: true },
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "./i18n/en.json" },
      { code: "fr", iso: "fr-FR", file: "./i18n/fr.json" },
      { code: "kz", iso: "kz-KZ", file: "./i18n/kz.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
    },
  },
  router: {
    options: {
      linkActiveClass: "link-active",
      linkExactActiveClass: "link-exact-active text-primary",
    },
  },
});
