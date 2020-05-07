import Vue from "vue";

function seo({ title = "", description = "", image = "", script = [] }) {
  return {
    title,
    meta: [
      {
        hid: `title`,
        property: `title`,
        name: `title`,
        content: title
      },
      {
        hid: `description`,
        property: `description`,
        name: `description`,
        content: description
      },
      {
        hid: `image`,
        property: `image`,
        name: `image`,
        content: image
      },
      {
        hid: `url`,
        name: `url`,
        property: `url`,
        content: "https://kononov-nuxt.netlify.com/"
      },
      {
        hid: `og:title`,
        property: "og:title",
        name: `og:title`,
        content: title
      },
      {
        hid: `og:image`,
        property: `og:image`,
        name: `og:image`,
        content: image
      },
      {
        hid: `og:description`,
        property: `og:description`,
        name: `og:description`,
        content: description
      },
      {
        hid: `og:type`,
        name: `og:type`,
        property: `og:type`,
        content: `website`
      },
      {
        hid: `og:url`,
        name: `og:url`,
        property: `og:url`,
        content: "https://kononov-nuxt.netlify.com"
      },
      {
        hid: `og:site_name`,
        name: `og:site_name`,
        property: `og:site_name`,
        content: "Fitness and gymnastic training programs"
      },
      {
        hid: `twitter:card`,
        name: `twitter:card`,
        property: `twitter:card`,
        content: `summary`
      },
      {
        hid: `twitter:image`,
        name: `twitter:image`,
        property: `twitter:image`,
        content: image
      },
      {
        hid: `twitter:creator`,
        name: `twitter:creator`,
        property: `twitter:creator`,
        content: "Anton"
      },
      {
        hid: `twitter:title`,
        name: `twitter:title`,
        property: `twitter:title`,
        content: title
      },
      {
        hid: `twitter:description`,
        name: `twitter:description`,
        property: `twitter:description`,
        content: description
      }
    ],
    script
  };
}

Vue.prototype.$seo = seo;
