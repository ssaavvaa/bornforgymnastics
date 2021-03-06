<template>
  <div class="full-height">
    <div class="top-wrapper container">
      <h1 class="heading-1 training-heading-phone">{{ training.name }}</h1>
      <div class="images-descriptions-data">
        <div class="images-data">
          <div>
            <img
              v-for="image in training.gallery"
              :key="image.alt"
              :src="`${image.src}.jpg`"
              :alt="image.alt"
            />
          </div>
          <img :src="`${training.image}.jpg`" alt="preview-image" />
        </div>
        <div class="training-full__description">
          <p
            v-for="paragraph in training.full_description"
            :key="paragraph.key"
          >
            {{ paragraph.text }}
          </p>
        </div>
      </div>
      <div class="info-data">
        <h1 class="heading-1 training-heading">{{ training.name }}</h1>
        <div class="training-rating">
          <rating :readOnly="true" />(100 people liked)
        </div>
        <p class="training-short-description">
          {{ training.short_description }}
        </p>
        <div class="training-price">
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
        <button
          @click="addToCart(training._id)"
          class="button training_cart-button"
        >
          Add to cart
        </button>
        <div class="training-refund">
          <img src="/svg/refund.svg" alt="refund-icon" />
          <div>
            <h5>MONEY-BACK GUARANTEE</h5>
            <p>
              If you don’t love this after your first workout, email us and
              we’ll give you a full refund.
            </p>
          </div>
        </div>
        <ul class="training-bullets">
          <li v-for="bullet in training.bullets" :key="bullet.icon">
            <img :src="`/svg/${bullet.icon}.svg`" alt="icon" />
            <p>{{ bullet.text }}</p>
          </li>
          <li>
            <img src="/svg/cart.svg" alt="icon" />
            <p>{{ 134 + training.users.length }} People own this course</p>
          </li>
        </ul>
        <div class="training-full__description--phone">
          <p
            v-for="paragraph in training.full_description"
            :key="paragraph.key"
          >
            {{ paragraph.text }}
          </p>
        </div>
      </div>
    </div>
    <div
      :style="{ background: `url(${training.if_program_match.bg})` }"
      class="training-program_match-section"
    >
      <div class="container">
        <h2 class="heading-2">{{ training.if_program_match.heading }}</h2>
        <ul>
          <li v-for="data in training.if_program_match.data" :key="data.key">
            <div>
              <img :src="`/svg/${data.icon}.svg`" alt="icon" />
            </div>
            <h3>{{ data.heading }}</h3>
            <p>{{ data.text }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="container what_get-container">
      <h2 class="heading-2">{{ training.what_get.heading }}</h2>
      <ul>
        <li v-for="(data, idx) in training.what_get.data" :key="data.key">
          <div>
            <div>0{{ idx + 1 }}</div>
            <div>
              <h3>{{ data.heading }}</h3>
              <p>{{ data.text }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  methods: {
    addToCart(_id) {
      const currCart = this.$store.state.cart;
      console.log(currCart);
      if (!currCart.length) {
        this.$store.commit("setCart", [_id]);
        localStorage.setItem("bornforgymnastics-cart", JSON.stringify([_id]));
        return this.$toast.success("Added to cart", {
          icon: "check"
        });
      }
      if (currCart.includes(_id)) {
        return this.$toast.info("Already in cart", {
          icon: "info"
        });
      }

      this.$store.commit("setCart", [...currCart, _id]);
      localStorage.setItem(
        "bornforgymnastics-cart",
        JSON.stringify([...currCart, _id])
      );
      return this.$toast.success("Added to cart", {
        icon: "check"
      });
    }
  },
  async asyncData({ payload, app: { store }, $axios, params: { slug } }) {
    if (payload) {
      return { training: payload };
    }
    const response = await $axios.$get(`/trainings?slug=${slug}`);
    return { training: response[0] };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.training-heading-phone {
  display: none;
}
.training-full__description--phone {
  display: none;
}
.what_get-container {
  ul {
    display: grid;
    grid-template-columns: minmax(280px, 470px) minmax(280px, 470px);
    grid-gap: 50px;
    justify-content: center;

    li {
      & > div {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 100px 1fr;
        div {
          &:nth-of-type(1) {
            font-family: $superBoldFont;
            color: $paleOrange;
            font-size: 72px;
          }
          &:nth-of-type(2) {
            h3 {
              font-family: $mainFontBold;
              font-size: 18px;
              margin-bottom: 10px;
            }

            p {
              font-size: 16px;
              font-family: $myriadMedium;
              color: $paleFont;
            }
          }
        }
      }
    }
  }
}

.training-program_match-section {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center center !important;
  div {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 60px;
      li {
        text-align: center;
        div {
          background: white;
          padding: 20px;
          transform: skewX(-10deg);
          width: 40px;
          height: 40px;
          display: inline-block;
          margin-bottom: 15px;
          img {
            transform: skewX(10deg);
            width: 100%;
            height: auto;
          }
        }
        h3 {
          font-family: $mainFontBold;
          font-size: 18px;
          margin-bottom: 15px;
        }
        p {
          font-size: 16px;
          font-family: $myriadMedium;
        }
      }
    }
  }
}

.top-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 50px;
}
.images-descriptions-data {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
}
.training-refund {
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-gap: 10px;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  background: $lightBackground;
  div {
    h5 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
}
.training-rating {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 20px;
  margin-bottom: 15px;
}
.training-heading {
  color: $mainOrange;
  text-transform: uppercase;
}

.training_cart-button {
  padding: 17px 50px;
  margin-bottom: 15px;
  width: 100%;
  color: white;
  border-radius: 3px;
}

.training-bullets {
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: 10px;
  li {
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-gap: 10px;
    img {
      width: 100%;
      height: 20px;
    }
  }
}

.training-price {
  p {
    display: inline-block;
    font-size: 40px;
    color: $mainOrange;
    font-family: $mainFontBold;
  }
  margin-bottom: 25px;
}

.crossPrice {
  color: rgba(0, 0, 0, 0.4) !important;
  font-size: 30px !important;
  text-decoration: line-through;
}

.training-full__description {
  p {
    font-family: $mainFontLight;
    font-size: 18px;
    margin-bottom: 10px;
    &:nth-of-type(1) {
      &:after {
        content: "___";
        display: block;
      }
    }
  }
}

.training-short-description {
  font-size: 20px;
  font-family: $myriadMedium;
  margin-bottom: 25px;
  font-weight: 500;
}
.images-data {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-gap: 50px;
  img {
    width: 100%;
    height: auto;
  }
  div {
    img {
      width: 100%;
      height: auto;
    }
  }
}
@media only screen and (max-width: 768px) {
  .training-rating {
    font-size: 13px;
    grid-gap: 10px;
    align-items: center;
  }
  .training-full__description--phone {
    display: block;
    margin-top: 30px;
    p {
      &:nth-of-type(1) {
        &:after {
          content: "___";
          display: block;
          margin-bottom: 10px;
        }
      }
    }
  }
  .training-heading {
    display: none;
  }
  .training-heading-phone {
    display: initial;
    color: $mainOrange !important;
  }
  .training-short-description {
    margin-bottom: 30px;
  }
  .training-price {
    margin-bottom: 30px;
  }
  .top-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  .training-full__description {
    display: none;
  }
  .images-descriptions-data {
    flex-direction: row-reverse;
    margin-bottom: 10px;
  }
  .training-refund {
    margin-bottom: 40px !important;
  }
  .images-data {
    grid-template-columns: 1fr;
    grid-gap: 20px;
    img {
      width: 100%;
      height: auto;
      grid-row: 1;
    }
    div {
      grid-row: 2;

      img {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
    }
  }
  .training-program_match-section {
    background: $lightBackground !important;
    div {
      ul {
        grid-template-columns: 1fr;
        grid-gap: 40px;
        li {
          h3 {
            line-height: 1.4;
            font-family: $mainFontBold;
            font-size: 18px;

            max-width: 90%;
            margin: 0 auto;
            margin-bottom: 10px;
          }
          p {
            line-height: 1.4;
            font-size: 16px;
            max-width: 80%;
            margin: 0 auto;
            font-family: $myriadMedium;
          }
        }
      }
    }
  }
  .what_get-container {
    ul {
      grid-template-columns: 1fr;

      grid-gap: 30px;
      li {
        & > div {
          display: grid;
          grid-gap: 5px;
          grid-template-columns: 1fr;
          div {
            line-height: 1;
            margin-bottom: 7px;
            &:nth-of-type(1) {
              font-family: $superBoldFont;
              color: $paleOrange;
              font-size: 52px;
            }
            &:nth-of-type(2) {
              h3 {
                font-family: $mainFontBold;
                font-size: 18px;
                margin-bottom: 7px;
                line-height: 1.4;
              }

              p {
                font-size: 16px;
                line-height: 1.4;
                font-family: $myriadMedium;
                color: $paleFont;
              }
            }
          }
        }
      }
    }
  }
}
</style>
