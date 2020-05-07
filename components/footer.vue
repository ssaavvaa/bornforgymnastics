<template>
  <footer>
    <div class="container container-footer">
      <logo-icon class="logo" />
      <div class="middle-footer">
        <nav>
          <nuxt-link to="/"> My profile</nuxt-link>
          <nuxt-link to="/"> Main</nuxt-link>
          <nuxt-link to="/"> Trainings</nuxt-link>
          <nuxt-link to="/"> Blog</nuxt-link>
          <nuxt-link to="/"> Cart</nuxt-link>
          <nuxt-link to="/"> Faq</nuxt-link>
        </nav>
        <ul>
          <li><union-pay-icon /></li>
          <li><master-card-icon /></li>
          <li><visa-icon /></li>
        </ul>
        <p>
          ©Копирайт. Kononov Team/ {{ new Date().getFullYear() }}. Все права
          защищены
        </p>
      </div>
      <ul class="icons">
        <li>
          <a href="#">
            <facebook-icon />
          </a>
        </li>
        <li>
          <a href="#">
            <youtube-icon class="youtube" />
          </a>
        </li>
        <li>
          <a href="#">
            <instagram-icon />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
footer {
  background: black;
}
.container-footer {
  display: grid;
  grid-template-columns: 140px 1fr 35px;
  grid-gap: 100px;
}
.logo {
  fill: white;
  width: 100%;
  height: auto;
}
.icons {
  li {
    margin-bottom: 4px;
    a {
      svg {
        fill: white;
        width: 100%;
        height: auto;
      }
    }
  }
}

.middle-footer {
  nav {
    display: grid;
    grid-gap: 20px;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 100px);
    margin-bottom: 80px;
    a {
      color: white;
    }
  }
  ul {
    display: grid;
    grid-template-columns: 50px 50px 50px;
    align-items: center;
    grid-gap: 20px;
    justify-content: center;
    margin-bottom: 30px;
    li {
      svg {
        width: 100%;
        height: auto;
        border-radius: 3px;
      }
    }
  }
  p {
    font-size: 12px;
    color: white;
    font-family: $myriadMedium;
    text-align: center;
  }
}

.youtube {
  fill: black !important;
  width: 30px !important;
  padding: 8px 3px;
  background: white;
  border-radius: 3px;
}

@media only screen and (max-width: 768px) {
  .container-footer {
    grid-template-columns: 1fr;

    grid-gap: 30px;
    padding: 50px 15px;
  }
  .logo {
    width: 100px;
    margin: 0 auto;
  }
  .middle-footer {
    nav {
      margin-bottom: 50px;
      a {
        text-align: center;
      }
    }
    ul {
      display: grid;
      grid-template-columns: 40px 40px 40px;
      align-items: center;
      grid-gap: 20px;
      justify-content: center;
      margin-bottom: 30px;
      li {
        svg {
          width: 100%;
          height: auto;
          border-radius: 3px;
        }
      }
    }
    p {
      font-size: 12px;
      color: white;
      font-family: $myriadMedium;
      text-align: center;
    }
  }
  .icons {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 35px 35px 35px;
    justify-content: center;
    li {
      margin-bottom: 4px;
      a {
        svg {
          fill: white;
          width: 100%;
          height: 30px !important;
        }
      }
    }
  }
  .youtube {
    fill: black !important;
    width: 30px !important;
    padding: 0px 2px;
    background: white;
    border-radius: 3px;
  }
}
</style>
