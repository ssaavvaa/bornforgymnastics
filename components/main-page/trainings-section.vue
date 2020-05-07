<template>
  <div class="container">
    <h2 class="heading-2">Choose your training</h2>
    <div class="training-cards">
      <big-arrow-icon />
      <ul>
        <li v-for="training in $store.state.trainings" :key="training._id">
          <picture>
            <source
              media="(max-width: 768px)"
              :srcset="
                `${training.image}-300.jpg 1x,
               ${training.image}-300@2x.jpg 2x,
               ${training.image}-300@3x.jpg 3x`
              "
            />
            <source
              media="(min-width: 768px)"
              :srcset="
                `${training.image}.jpg 1x,
               ${training.image}@2x.jpg 2x,
               ${training.image}@3x.jpg 3x`
              "
            />
            <img
              @click="$router.push(`/trainings/${training.slug}`)"
              class="picture"
              :src="`${training.image}.jpg`"
              alt="training"
            />
          </picture>
        </li>
      </ul>
      <big-arrow-icon class="arrow-right" />
    </div>
    <nuxt-link class="arrow-text" to="/trainings">
      To Trainings
      <arrow-icon />
    </nuxt-link>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.training-cards {
  display: grid;
  align-items: center;
  grid-gap: 40px;
  justify-content: space-between;
  grid-template-columns: 20px 1fr 20px;
  margin-bottom: 60px;
  * {
    cursor: pointer;
  }
  svg {
    fill: rgba(0, 0, 0, 0.76);
    width: 100%;
    height: auto;
  }
}
ul {
  display: grid;
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
  grid-template-columns: minmax(190px, 220px) minmax(230px, 250px) minmax(
      190px,
      220px
    );

  li {
    &:nth-of-type(2) {
      position: relative;
      &:after {
        content: "New";
        position: absolute;
        top: -15px;
        right: -15px;
        height: 80px;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $mainOrange;
        font-weight: bold;
        border-radius: 100%;
        font-size: 20px;
        color: white;
      }
    }
  }

  img {
    width: 100%;
  }
}
</style>
