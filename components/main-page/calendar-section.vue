<template>
  <section class="container">
    <h2 class="heading-2">Календарь 2019 - 2020</h2>
    <ul>
      <li>
        <img src="/calendar/gatineau.jpg" alt="gatinau" />
        <p class="city">City</p>
        <p class="country">Country</p>
        <p class="date">1.08.2019 - 1.09.2019</p>
      </li>
      <li>
        <img src="/calendar/toronto.jpg" alt="gatinau" />
        <p class="city">City</p>
        <p class="country">Country</p>
        <p class="date">1.08.2019 - 1.09.2019</p>
      </li>
      <li>
        <img src="/calendar/miami.jpg" alt="gatinau" />
        <p class="city">City</p>
        <p class="country">Country</p>
        <p class="date">1.08.2019 - 1.09.2019</p>
      </li>
      <li>
        <img src="/calendar/huston.jpg" alt="gatinau" />
        <p class="city">City</p>
        <p class="country">Country</p>
        <p class="date">1.08.2019 - 1.09.2019</p>
      </li>
      <li>
        <img src="/calendar/austin.jpg" alt="gatinau" />
        <p class="city">City</p>
        <p class="country">Country</p>
        <p class="date">1.08.2019 - 1.09.2019</p>
      </li>
      <li>
        <img src="/calendar/chicago.jpg" alt="gatinau" />
        <p class="city">City</p>
        <p class="country">Country</p>
        <p class="date">1.08.2019 - 1.09.2019</p>
      </li>
      <li>
        <img src="/calendar/washington.jpg" alt="gatinau" />
        <p class="city">City</p>
        <p class="country">Country</p>
        <p class="date">1.08.2019 - 1.09.2019</p>
      </li>
      <li>
        <img src="/calendar/vancouver.jpg" alt="gatinau" />
        <p class="city">City</p>
        <p class="country">Country</p>
        <p class="date">1.08.2019 - 1.09.2019</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

section {
  max-width: 970px;
  margin: 0 auto;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 60px;
    li {
      max-width: 170px;
      margin: 0 auto;
      * {
        margin-bottom: 4px;
        text-align: center;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
.city {
  font-size: 20px;
  font-family: $mainFontBold;
}
.country {
  font-size: 20px;
  font-family: $mainFontLight;
}

.date {
  margin-bottom: 0px;
  font-family: $mainFontLight;
  font-size: 16px;
}

@media only screen and (max-width: 768px) {
  section {
    ul {
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
      padding: 0px 10px;
      li {
        max-width: 100%;

        * {
          margin-bottom: 1px;
          text-align: center;
        }
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .city {
    font-size: 16px;
  }
  .country {
    font-size: 16px;
  }

  .date {
    font-size: 12px;
  }
}
</style>
