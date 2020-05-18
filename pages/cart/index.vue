<template>
  <div class="container full-height">
    <h1 class="heading-1">Cart</h1>
    <div class="wrapper">
      <div class="wrapper-cart-items">
        <ul v-if="cart" class="cart-trainings">
          <li v-for="item in cart" :key="item._id">
            <cross-icon @click="deleteItem(item._id)" />
            <img :src="`${item.image}.jpg`" :alt="item.name" />
            <div class="training-info">
              <h3>{{ item.name }}</h3>
              <p>Duration: {{ item.duration }}</p>
              <p>Level: {{ item.level }}</p>
            </div>
            <div class="training-price">
              <p>{{ item.price }}$</p>
            </div>
          </li>
        </ul>
        <p v-else class="empty-cart">Cart is empty...</p>
      </div>
      <div class="wrapper-form">
        <form>
          <h2 class="heading-form">Payment</h2>
          <input :disabled="$auth.$state.loggedIn" type="text" placeholder="username" />
          <input :disabled="$auth.$state.loggedIn" type="email" placeholder="email" />
          <input :disabled="$auth.$state.loggedIn" type="password" placeholder="password" />
          <button>Pay</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,

  head({ $seo }) {
    return $seo({
      title: "Cart",
      description:
        "Fitness and Gymnastic training Programs from Oleksyi Kononov",
      image: "/main-bg.jpg"
    });
  },

  methods: {
    deleteItem(_id) {
      const cart = this.$store.state.cart;
      const newCart = cart.filter(x => x !== _id);
      localStorage.setItem("bornforgymnastics-cart", JSON.stringify(newCart));
      return this.$store.commit("setCart", newCart);
    }
  },

  computed: {
    cart() {
      return this.$store.state.trainings.filter(x =>
        this.$store.state.cart.includes(x._id)
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.empty-cart {
  text-align: center;
}
.wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 50px;
  padding: 35px 20px;
}
.wrapper-form {
  background: $lightBackground;
  padding: 35px;
}

.wrapper-cart-items {
  background: $lightBackground;
  padding: 35px;
}
.training-info {
  display: grid;
  grid-gap: 5px;
}

.training-price {
  p {
    font-weight: 600;
  }
}

.cart-trainings {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  justify-content: center;
  li {
    grid-gap: 20px;
    display: grid;
    align-items: center;
    grid-template-columns: 20px 100px 1fr max-content;
    img {
      width: 100%;
      height: auto;
    }
    svg {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }
}
.heading-form {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

form {
  margin: 0 auto;
  max-width: 670px;
  button {
    width: 100%;
    padding: 20px;
  }

  input {
    display: block;
    width: 100%;
    font-size: 18px;
    box-sizing: border-box;
    font-family: $robotoMedium;
    padding: 25px;
    border: none;
    transition: box-shadow 0.3s ease-in-out;
    margin-bottom: 20px;
    &::placeholder {
      font-family: $robotoMedium;
      color: rgba(90, 90, 90, 0.336);
      font-size: 18px;
    }
    &:focus {
      box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.082);
      border-radius: 3px;
      outline: none;
    }
  }
}
@media only screen and (max-width: 768px) {
  .wrapper-form {
    padding: 40px 20px;
  }
  .training-price {
    p {
      text-align: center;
      margin-bottom: 10px;
    }
  }
  .wrapper {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding: 0px;
  }
  .training-info {
    h3 {
      text-align: center;
    }
    p {
      display: none;
    }
  }
  .wrapper-cart-items {
    background: $lightBackground;
    padding: 20px;
  }
  .cart-trainings {
    display: grid;
    padding: 0px;
    grid-template-columns: 1fr;
    grid-gap: 40px;
    justify-content: center;
    li {
      grid-gap: 10px;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      img {
        width: 100%;
        height: auto;
      }
      svg {
        margin: 0 auto;
        grid-row: 4;
        width: 20px;
        height: auto;
        cursor: pointer;
      }
    }
  }
}
</style>
