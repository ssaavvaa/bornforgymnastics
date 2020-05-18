<template>
  <header>
    <nav>
      <nuxt-link class="logo" to="/">
        <logo-icon />
      </nuxt-link>
      <nuxt-link class="cart_wrapper" to="/cart">
        <span v-show="$store.state.cart.length">{{ $store.state.cart.length }}</span>

        <cart-icon class="cart" />
      </nuxt-link>
      <nuxt-link v-if="!$auth.loggedIn" class="register" to="/register">
        Sign Up
        <span>/ Sign In</span>
      </nuxt-link>
      <p class="register" v-else @click="$auth.logout({})">Sign Out</p>
      <burger-icon @click="this.$toggleSideBar" class="burger" />
    </nav>
  </header>
</template>

<script>
export default {
  mounted() {
    const cart =
      JSON.parse(localStorage.getItem("bornforgymnastics-cart")) || [];
    this.$store.commit("setCart", cart);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

header {
  background: $paleOrange;
  padding: 20px;
  nav {
    max-width: 1170px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr max-content max-content max-content;
    justify-content: center;
    align-items: center;
    grid-gap: 45px;
    svg {
      fill: white;
    }
    a,
    p {
      color: white;
    }
    p {
      font-size: 16px;
    }
    * {
      cursor: pointer;
    }
    .register {
      * {
        color: white;
      }

      font-size: 16px;
      font-family: $robotoBold;
      span {
        font-family: $robotoMedium;
        font-size: 15px;
      }
    }
  }

  .cart_wrapper {
    position: relative;
    span {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -10px;
      right: -10px;
      background: $mainOrange;
      color: white;
      width: 23px;
      height: 23px;

      border-radius: 100%;
      font-weight: 600;
    }
  }

  .cart {
    width: 32px;
    height: auto;
  }

  .logo {
    svg {
      width: 136px;
      fill: white;
      height: 48px;
    }
  }
  .burger {
    height: auto;
    width: 45px;
  }
}

@media only screen and (max-width: 768px) {
  header {
    background: $paleOrange;
    padding: 15px 20px;
    nav {
      grid-template-columns: 30px 1fr 40px;
      grid-template-areas: "cart logo burger";
      justify-content: center;
      align-items: center;
      justify-items: center;
      grid-gap: 10px;

      .register {
        display: none;
      }
    }

    .cart {
      grid-area: cart;
      width: 30px;
      height: auto;
    }

    .logo {
      grid-area: logo;
      svg {
        width: 85px;
        height: auto;
      }
    }
    .burger {
      grid-area: burger;

      height: auto;
      width: 40px;
    }
  }
}
</style>
