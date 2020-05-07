<template>
  <section>
    <div class="container">
      <h2 class="heading-2">Training principles</h2>
      <div class="desktop">
        <ul>
          <li>
            <div class="number">01</div>
            <h4 class="heading">Sequence</h4>
            <p class="text">
              All the programs are grounded in a simple-to-complex basis
            </p>
          </li>
          <li>
            <div class="number">02</div>
            <h4 class="heading">Specificity</h4>
            <p class="text">
              You’ll get the result there where your focus is. One program - one
              goalt
            </p>
          </li>
          <li>
            <div class="number">03</div>
            <h4 class="heading">Ideal technique</h4>
            <p class="text">
              I only believe in lead-up exercises and creation of effective
              patterns of movement.
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <div class="number">04</div>
            <h4 class="heading">Super compensation</h4>
            <p class="text">
              If you are looking for a magic pill, I’m headed the other way. I
              only believe in a very hard work. Amount of repetition and set per
              exercises, calluses and sweat determine the result.
            </p>
          </li>
          <li>
            <div class="number">05</div>
            <h4 class="heading">Recovery Respect</h4>
            <p class="text">Recovery is a key part of a training process</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

section {
  background: url("/principles-bg.jpg") no-repeat center center/cover;

  .container {
    h2 {
      color: white;
    }
  }

  .desktop {
    max-width: 970px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    ul {
      display: grid;
      grid-gap: 30px;
      li {
        display: grid;
        grid-template-areas:
          "number heading"
          "number text";
        grid-gap: 0px;
        grid-template-columns: max-content 300px;
        grid-template-rows: 30px max-content;
        .number {
          position: relative;
          top: -20px;
          display: inline-block;
          font-size: 72px;
          color: $mainOrange;
          font-family: $superBoldFont;
          grid-area: number;
          margin-right: 20px;
        }
        .heading {
          color: white;
          display: inline-block;
          grid-area: heading;
          font-family: $myriadMedium;
          font-size: 18px;
        }
        .text {
          color: white;
          grid-area: text;
          font-family: $mainFontLight;
          font-size: 18px;
        }
      }

      &:nth-of-type(2) {
        align-items: center;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  section {
    background: url("/principles-bg-phone.jpg") no-repeat top center/cover;
    .container {
      h2 {
        margin-bottom: 80px;
      }
    }
    .desktop {
      max-width: 970px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 30px;
      ul {
        display: grid;
        grid-gap: 50px;
        li {
          position: relative;
          left: -20px;
          display: grid;
          grid-template-areas:
            "number heading"
            "number text";
          grid-gap: 0px;
          grid-template-columns: max-content 1fr;
          grid-template-rows: 30px max-content;
          .number {
            position: relative;
            top: -34px;
            right: -30px;
            display: inline-block;
            font-size: 72px;
            color: #eb6c0a8a;
            font-family: $superBoldFont;
            grid-area: number;
            margin-right: 0px;
            z-index: 0;
          }
          .heading {
            position: relative;
            z-index: 1;
            color: white;
            display: inline-block;
            grid-area: heading;
            font-family: $myriadMedium;
            font-size: 20px;
          }
          .text {
            position: relative;
            z-index: 1;
            color: white;
            grid-area: text;
            font-family: $mainFontLight;
            font-size: 17px;
            line-height: 1.4;
          }
        }
        &:nth-of-type(1) {
          margin-bottom: 20px;
        }
        &:nth-of-type(2) {
          align-items: center;
        }
      }
    }
  }
}
</style>
