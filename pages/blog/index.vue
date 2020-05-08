<template>
  <div class="background">
    <div class="container full-height">
      <h1 class="heading-1">Blog</h1>
      <ul class="wrapper">
        <li v-for="blog in $store.state.blogs.slice(0, 3)" :key="blog._id">
          <nuxt-link :to="`/blog/${blog.slug}`">
            <picture>
              <source
                media="(min-width: 300px)"
                :srcset="
                  `${blog.image}.jpg 1x,
              ${blog.image}@2x.jpg 2x,
              ${blog.image}@3x.jpg 3x`
                "
              />
              <img class="picture" :src="`${blog.image}.jpg`" alt="training" />
            </picture>
            <p class="date">
              {{ $moment(blog.createdAt).format("YYYY MMM do ") }}
            </p>
            <h3 class="heading">{{ blog.name }}</h3>
            <p class="description">
              {{ blog.description }}
            </p>
          </nuxt-link>
        </li>
      </ul>
      <div class="buttons">
        <button :disabled="true">Prev</button>
        <button :disabled="true">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.background {
  background: $lightBackground;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 50px;
  li {
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.199);
    &:hover {
      box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.229);
    }
    a {
      background: white;
      display: grid;
      grid-gap: 10px;
      padding-bottom: 30px;
      p,
      h3 {
        max-width: 80%;
        margin: 0 auto;
      }
      * {
        text-align: center;
      }
    }
  }
}
.date {
  font-family: $mainFontLight;
  font-size: 16px;
  color: rgba(38, 38, 38, 0.6);
}
.heading {
  font-family: $robotoBold;
  font-size: 24px;
}
.description {
  font-family: $myriadMedium;
  font-size: 16px;
  margin-bottom: 0px;
}
.buttons {
  display: grid;
  justify-content: center;
  grid-template-columns: max-content max-content;
  grid-gap: 40px;
  button {
    background: rgb(194, 194, 212);
    padding: 10px 40px;
    color: black;
    &:disabled {
      background: rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0, 0.212);
      cursor: unset;
    }
  }
}
</style>
