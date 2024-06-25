/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/styles/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-aos",
    "@pinia/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: [100, 300, 400, 700, 900],
        },
      },
    ],

    "nuxt-vue3-google-signin",
    [
      "nuxt-swiper",
      {
        swiper: {
          // modules: ["navigation", "pagination"],
        },
      },
    ],
    "@nuxtjs/i18n",
    [
      "@nuxtjs/color-mode",
      {
        colorMode: {
          preference: "system",
          fallback: "dark",
          hid: "nuxt-color-mode-script",
          globalName: "__NUXT_COLOR_MODE__",
          componentName: "ColorScheme",
          classPrefix: "",
          classSuffix: "-mode",
          storageKey: "nuxt-color-mode",
        },
      },
    ],
  ],
  googleSignIn: {
    clientId:
      "1018060929090-m56k9dj09sisljupfaca7fi07sq07jjo.apps.googleusercontent.com",
  },

  // i18n: {
  //   locales: [
  //     { code: "en", iso: "en-US", file: "en.json" },
  //     { code: "km", iso: "km-KM", file: "km.json" },
  //   ],
  //   strategy: "prefix_except_default",
  //   defaultLocale: "en",
  //   lazy: true,
  //   langDir: "lang/",
  //   // vueI18n: {
  //   //   fallbackLocale: "en",
  //   // },
  // },
});
