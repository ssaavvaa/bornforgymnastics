<template>
  <section class="container">
    <h2 class="heading-2">Glad to know you</h2>
    <div class="wrapper">
      <div class="icons">
        <facebook-icon />
        <youtube-icon class="youtube" />
        <instagram-icon />
      </div>

      <ul class="photos">
        <li>
          <a href="#">
            <img src="/social/1.jpg" alt="instagram-photo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/social/2.jpg" alt="instagram-photo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/social/3.jpg" alt="instagram-photo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/social/4.jpg" alt="instagram-photo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/social/5.jpg" alt="instagram-photo" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.wrapper {
  display: grid;
  grid-template-columns: 35px 1fr;
  grid-gap: 30px;
}

.youtube {
  fill: white !important;
  padding: 8px 4px;
  width: 30px !important;
  background: $mainOrange;
}

.photos {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  li {
    a {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

.icons {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  align-items: center;
  align-self: center;
  grid-template-rows: 35px 35px 35px;
  svg {
    border-radius: 3px;
    width: 100%;
    height: auto;
    fill: $mainOrange;
  }
}

@media only screen and (max-width: 768px) {
  .photos {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 1fr;
    li {
      &:nth-of-type(5) {
        display: none;
      }
    }
  }
}
</style>
