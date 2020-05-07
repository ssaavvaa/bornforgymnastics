<template>
  <section class="container">
    <h1 class="heading-2">Fresh in blog</h1>
    <ul>
      <li>
        <picture>
          <source
            media="(min-width: 300px)"
            srcset="
              /blog/five_secrets/main.jpg    1x,
              /blog/five_secrets/main@2x.jpg 2x,
              /blog/five_secrets/main@3x.jpg 3x
            "
          />
          <img
            class="picture"
            src="/blog/five_secrets/main.jpg"
            alt="training"
          />
        </picture>
        <p class="date">22 августа</p>
        <h3 class="heading">5 секретов для выдающегося дня</h3>
        <p class="description">
          Сценарий дня, когда ты сможешь побороть свою лень
        </p>
      </li>
      <li>
        <picture>
          <source
            media="(min-width: 300px)"
            srcset="
              /blog/five_secrets/main.jpg    1x,
              /blog/five_secrets/main@2x.jpg 2x,
              /blog/five_secrets/main@3x.jpg 3x
            "
          />
          <img
            class="picture"
            src="/blog/five_secrets/main.jpg"
            alt="training"
          />
        </picture>
        <p class="date">22 августа</p>
        <h3 class="heading">5 секретов для выдающегося дня</h3>
        <p class="description">
          Сценарий дня, когда ты сможешь побороть свою лень
        </p>
      </li>
      <li>
        <picture>
          <source
            media="(min-width: 300px)"
            srcset="
              /blog/five_secrets/main.jpg    1x,
              /blog/five_secrets/main@2x.jpg 2x,
              /blog/five_secrets/main@3x.jpg 3x
            "
          />
          <img
            class="picture"
            src="/blog/five_secrets/main.jpg"
            alt="training"
          />
        </picture>
        <p class="date">22 августа</p>
        <h3 class="heading">5 секретов для выдающегося дня</h3>
        <p class="description">
          Сценарий дня, когда ты сможешь побороть свою лень
        </p>
      </li>
    </ul>
    <p class="arrow-text arrow-text__orange">
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
