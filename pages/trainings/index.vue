<template>
  <div class="light-background">
    <div class="container full-height">
      <h1 class="heading-1">Trainings</h1>
      <div class="filter-wrapper">
        <p>Filter by:</p>
        <select>
          <option hidden value="Date">Date</option>
          <option value="saab">New</option>
          <option value="opel">Old</option>
        </select>
        <select>
          <option hidden value="level">Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Medium">Medium</option>
          <option value="Advance">Advance</option>
        </select>
      </div>

      <ul class="trainings">
        <li v-for="training in trainings" :key="training._id">
          <nuxt-link :to="`/trainings/${training.slug}`">
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
                class="picture"
                :src="`${training.image}.jpg`"
                :alt="'training program ' + training.name"
              />
            </picture>
            <div class="info_training">
              <h3>{{ training.name }}</h3>
              <p>Level: {{ training.level }}</p>
              <p>Duration: {{ training.duration }}</p>
              <rating :readOnly="true" />
            </div>
            <div class="price">
              <div>
                <p :class="[training.discount ? 'crossPrice' : '']">
                  {{ training.price }} $
                </p>
                <p v-show="training.discount">
                  {{
                    (
                      training.price -
                      training.price * (training.discount_procent / 100)
                    ).toFixed(2)
                  }}
                  $
                </p>
              </div>

              <dots-icon />
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  async asyncData({ $axios, payload }) {
    if (payload) {
      return { trainings: payload };
    }
    const trainings = await $axios.$get("/trainings");
    return { trainings };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.crossPrice {
  text-decoration: line-through;
  font-size: 20px !important;
  color: rgba(0, 0, 0, 0.5);
}

.trainings {
  max-width: 760px;
  margin: 0 auto;
  li {
    a {
      background: white;
      margin-bottom: 20px;
      padding: 30px;
      display: grid;
      grid-gap: 45px;
      grid-template-columns: 130px 1fr auto;
      align-items: center;
      box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.199);
      transition: box-shadow 0.3s ease-in-out;
      &:hover {
        box-shadow: 0px 0px 13px 7px rgba(0, 0, 0, 0.149);
      }
      img {
        width: 100%;
        height: auto;
      }
      .price {
        display: grid;
        grid-template-columns: 1fr 8px;
        grid-gap: 30px;
        align-items: center;
        & > div > p {
          text-align: center;
          font-size: 24px;
        }
        svg {
          width: 100%;
          height: auto;
          fill: $mainOrange;
        }
      }
      .info_training {
        h3 {
          font-size: 24px;
          font-family: $robotoMedium;
          margin-bottom: 8px;
        }
        p {
          color: $paleFont;
          &:nth-of-type(1) {
            margin-bottom: 8px;
          }
          &:nth-of-type(2) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}

.filter-wrapper {
  background: white;
  padding: 25px 170px;
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  * {
    color: $paleFont;
  }
  select {
    border: 0.6px solid rgba(40, 40, 40, 0.301);
    padding: 7px 10px;
    border-radius: 4px;
    min-width: 200px;
    transition: box-shadow 0.3s ease-in-out;

    &:focus {
      outline: none;
    }
  }
  p {
    font-family: $robotoMedium;
  }
}

@media only screen and (max-width: 768px) {
  .filter-wrapper {
    padding: 25px;

    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  .trainings {
    li {
      a {
        padding: 20px;

        grid-gap: 25px;
        grid-template-columns: 1fr;

        .price {
          display: grid;
          grid-template-columns: 1fr 6px;
          justify-items: flex-end;
          grid-gap: 10px;
          align-items: center;
          & > div > p {
            margin-right: 5px;
            display: inline-block;
            text-align: center;
            font-size: 24px;
          }
          svg {
            width: 100%;
            height: auto;
            fill: $mainOrange;
          }
        }
        .info_training {
          h3 {
            font-size: 22px;
          }
          p {
            color: $paleFont;
            &:nth-of-type(1) {
              margin-bottom: 8px;
            }
            &:nth-of-type(2) {
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
