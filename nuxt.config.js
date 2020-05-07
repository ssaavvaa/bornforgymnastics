const dynamicRoutes = require("./helpers/buildRoutes");

export default {
  mode: "universal",

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }
    ]
  },
  router: {
    linkActiveClass: "active-link"
  },
  loading: { color: "#fff" },

  css: [
    "~/assets/fonts/fonts.css",
    "~/assets/scss/variables.scss",
    "~/assets/scss/main.scss"
  ],

  plugins: [
    "@/plugins/fragment.js",
    "@/plugins/components.js",
    "@/plugins/toggleSideBar.js",
    "@/plugins/seo.js"
  ],

  buildModules: [],

  axios: {
    baseURL: process.env.BASE_URL || "http://localhost:1337"
  },

  router: {
    middleware: ["auth"]
  },

  modules: [
    "nuxt-svg-loader",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/toast"
  ],
  toast: {
    position: "top-center",

    singleton: true,
    duration: 1500,
    register: [
      {
        name: "my_info",
        message: "",
        options: {
          type: "info",
          className: "toast-info",
          icon: "info"
        }
      }
    ]
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/local",
            method: "post",
            propertyName: "jwt"
          },
          logout: false,
          user: { url: "/users/me", method: "get", propertyName: false }
        }
      }
    },
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/"
    }
  },
  build: {
    extend(config, ctx) {}
  },
  buildModules: ["@nuxtjs/moment"],
  generate: {
    fallback: true,
    routes: dynamicRoutes
  }
};
