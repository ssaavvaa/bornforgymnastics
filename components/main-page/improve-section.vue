<template>
  <section>
    <div class="container">
      <h2 class="heading-2">What we going to improve</h2>
      <ul>
        <li>
          <gymnast-icon />
          <h3>Gymnastics</h3>
          <p>
            Assistance in Gymnastics training of children, amateurs and athletes
          </p>
        </li>
        <li>
          <strong-icon />
          <h3>General Condition Traning</h3>
          <p>
            The main objective of the general physical training program is to
            improve physical qualities: endurance, strength, flexibility,
            coordination, speed. It Helps to Bild functional body for an active
            lifestile
          </p>
        </li>
        <li>
          <fist-icon />
          <h3>Motivation</h3>
          <p>
            Maintenance of a high level motivation by means of my personal
            example. performance on the Cirque du Soleil stage
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
section {
  background: url("../../static/improve-bg.jpg") no-repeat center center/cover;
  h2 {
    color: white;
  }
}
ul {
  display: grid;
  grid-gap: 100px;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  li {
    * {
      text-align: center;
      color: white;
    }
    h3 {
      font-size: 20px;
      font-family: $myriadMedium;
      margin-bottom: 15px;
    }
    p {
      font-family: $mainFontLight;
      font-size: 18px;
      line-height: 1.4;
    }
    svg {
      fill: black;
      margin: 0 auto;
      display: block;
      width: 60px;
      height: 60px;
      background: $mainOrange;
      padding: 20px;
      margin-bottom: 25px;
    }
    max-width: 288px;
  }
}
</style>
