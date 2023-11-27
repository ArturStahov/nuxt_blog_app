// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const title = "My posts site";
const shortTitle = "My posts site";
const description = "My posts site";
const url = "https://my-site.com/";
const image = "https://my-site.com/starter.png";

export default defineNuxtConfig({
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  modules: [
    async (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins ||= [];
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/i18n',
  ],
   //  Add the redirect
   routeRules: {
     "/home": { redirect: "/" },
   },
  i18n: {
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales',
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'EN',
        file: 'en.json'
      },
      {
        code: 'uk-UA',
        iso: 'uk-UA',
        name: 'UA',
        file: 'ua.json'
      },
    ],
    defaultLocale: 'en-US',
    detectBrowserLanguage: false,
  },
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  css: [
    'normalize.css/normalize.css',
    '@/assets/scss/main.scss',
    'vuetify/styles'
  ],
  app: {
    head: {
      title: title,
      titleTemplate: `%s | ${shortTitle}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com"},
        { rel: "preconnect", href:"https://fonts.gstatic.com", crossorigin: '' },
        { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,900;1,300&display=swap" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: url },
      ]
    }

  },
  runtimeConfig: {
    postsDbPath: process.env.POSTS_DB_PATH,
  }
})
