<template>
  <section class="container">
    <h2 class="heading-2">Fresh in blog</h2>
    <ul>
      <li v-for="blog in $store.state.blogs.slice(0, 3)" :key="blog._id">
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
      </li>
    </ul>
    <p @click="$router.push('/blog')" class="arrow-text arrow-text__orange">
      To Blog
      <arrow-icon />
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-bottom: 50px;
  li {
    * {
      text-align: center;
    }
    h3,
    p {
      max-width: 230px;
      margin: 0 auto;
      margin-bottom: 15px;
    }
    img {
      margin-bottom: 20px;
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
.arrow-text__orange {
  color: $mainOrange;
  svg {
    fill: $mainOrange;
  }
}

@media only screen and (max-width: 768px) {
  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
    margin-bottom: 50px;
  }
}
</style>
