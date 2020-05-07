<template>
  <header>
    <nav>
      <nuxt-link to="/">
        <logo-icon class="logo" />
      </nuxt-link>
      <nuxt-link to="/cart">
        <cart-icon class="cart" />
      </nuxt-link>
      <nuxt-link v-if="!$auth.loggedIn" class="register" to="/register">
        Sign Up
        <span>/ Sign In</span>
      </nuxt-link>
      <p v-else @click="$auth.logout({})">Sign Out</p>
      <burger-icon @click="this.$toggleSideBar" class="burger" />
    </nav>
  </header>
</template>

<script>
export default {};
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

  .cart {
    width: 32px;
    height: auto;
  }

  .logo {
    width: 136px;
    fill: white;
    height: 48px;
  }
  .burger {
    height: auto;
    width: 45px;
  }
}
</style>
