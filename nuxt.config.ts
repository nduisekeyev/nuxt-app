// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    // typeCheck: true,
    strict: true,
  },
  modules: ["@unocss/nuxt", "@nuxt/devtools", "@nuxtjs/i18n"],
  components: {
    dirs: [
      {
        path: "~/components",
        pathPrefix: false,
        priority: 2,
      },
    ],
    global: true,
  },

  nitro: {
    compressPublicAssets: true,
  },
  devtools: { enabled: true },
  i18n: {
    locales: [
      { code: "", iso: "en-US", file: "./i18n/en.json" },
      { code: "fr", iso: "fr-FR", file: "./i18n/fr.json" },
      { code: "kz", iso: "kz-KZ", file: "./i18n/kz.json" },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en-GB",
    detectBrowserLanguage: false,
  },
  css: [
    "@unocss/reset/tailwind-compat.css", // needed to reset styles see https://unocss.dev/guide/style-reset (@unocss/reset)
    "~/assets/css/main.css",
  ],
  router: {
    options: {
      linkActiveClass: "link-active",
      linkExactActiveClass: "link-exact-active text-primary",
    },
  },
  routeRules: {
    "/industry": {
      ssr: false,
    },
    "/blog": {
      ssr: false,
    },
    "/about": {
      ssr: false,
    },
  },
});
