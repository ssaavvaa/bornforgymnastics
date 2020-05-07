<template>
  <aside class="aside">
    <div class="scroller">
      <cross-icon @click="this.$toggleSideBar" class="cross" />
      <nav>
        <div v-show="$auth.loggedIn" class="user-block-wrapper">
          <div class="user-block">
            <user-icon />
            <nuxt-link to="/profile/">
              <span @click="this.$toggleSideBar">My Profile</span>
            </nuxt-link>
            <nuxt-link to="/profile/trainings">
              <span @click="this.$toggleSideBar">My Trainings</span>
            </nuxt-link>
          </div>
        </div>

        <nuxt-link v-show="!$auth.loggedIn" to="/profile">
          <span @click="this.$toggleSideBar">Profile</span>
        </nuxt-link>
        <nuxt-link to="/">
          <span @click="this.$toggleSideBar">Home</span>
        </nuxt-link>
        <nuxt-link to="/trainings">
          <span @click="this.$toggleSideBar">Trainings</span>
        </nuxt-link>
        <nuxt-link to="/">
          <span @click="this.$toggleSideBar">Blog</span>
        </nuxt-link>
        <nuxt-link to="/cart">
          <span @click="this.$toggleSideBar">Cart</span>
        </nuxt-link>
        <nuxt-link v-show="!$auth.loggedIn" class="register" to="/register">
          <span @click="this.$toggleSideBar">Sign Up</span>
        </nuxt-link>
        <nuxt-link v-show="!$auth.loggedIn" class="login" to="/login">
          <span @click="this.$toggleSideBar">Sign In</span>
        </nuxt-link>
        <p @click="$auth.logout({})" class="register logout" v-show="$auth.loggedIn">Sign Out</p>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.user-block-wrapper {
  background: $lightBackground;
  margin: 0px -10px;
  padding: 20px 0px 10px 0px;
  border-bottom: 0.6px solid rgba(0, 0, 0, 0.274);
}

.user-block {
  max-width: 140px;
  margin: 0px auto !important;
  padding: 0px !important;
  a,
  span {
    margin: 0px !important;
    padding: 0px !important;
    font-size: 16px !important;
  }
  a {
    margin-bottom: 10px !important;
    &:after {
      content: "_";
      display: block;
    }
  }
  svg {
    width: 50px;
    height: auto;
    margin: 0 auto;
  }
}
.aside {
  .scroller {
    overflow-y: scroll;
    padding: 10px 10px;
    height: 100vh;
  }

  position: fixed;
  z-index: 999;
  transform: translateX(300px);
  background: white;
  right: 0px;
  top: 0px;
  width: 260px;

  transition: transform 0.3s ease-in-out;
  box-shadow: -4px 0px 5px 1px rgba(19, 1, 1, 0.103);

  * {
    margin-bottom: 20px;
  }
  nav {
    * {
      display: block;
      font-size: 20px;
      margin-bottom: 20px;
      text-align: center;
      font-weight: 600;
      color: $paleFont;
    }
  }
}

.cross {
  width: 22px;
  margin-left: 3px;
  margin-top: 3px;
  height: 22px;
  display: block;
  cursor: pointer;
}

.toggle-sidebar {
  transform: translateX(0px);
}

.register {
  margin-top: 20px;
  padding-top: 20px;
  max-width: 140px;
  margin: 0 auto;
  border-top: 0.6px solid rgba(0, 0, 0, 0.274);
}

.login,
.logout {
  padding-bottom: 40px;
}

.register,
.login {
  cursor: pointer;
  font-size: 16px !important;
  span {
    font-size: 16px !important;
  }
}
</style>
