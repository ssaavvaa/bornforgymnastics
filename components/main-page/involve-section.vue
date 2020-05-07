<template>
  <section>
    <div class="container">
      <h2>
        <brackets />
        <span>
          If you need real tools to make a strong, flexible and sexy body, you
          are in a right road
        </span>
        <brackets />
      </h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
section {
  background: url("../../static/involve-bg.jpg") no-repeat center center/cover;
}
h2 {
  font-family: $myriadMedium;
  position: relative;
  max-width: max-content;
  margin: 0 auto;

  span {
    position: relative;
    line-height: 1.6;
    z-index: 3;
    font-size: 26px;
    color: white;
  }
  svg {
    width: 60px;
    height: auto;
    position: absolute;
    &:nth-of-type(1) {
      top: -35px;
      left: -45px;
    }
    &:nth-of-type(2) {
      bottom: -35px;
      right: -45px;
      transform: rotate(180deg);
    }
  }
}

@media only screen and (max-width: 768px) {
  section {
    padding-right: 30px;
    padding-left: 30px;
  }
  h2 {
    span {
      font-size: 18px;
      color: white;
    }
    svg {
      width: 30px;

      &:nth-of-type(1) {
        top: -15px;
        left: -25px;
      }
      &:nth-of-type(2) {
        bottom: -15px;
        right: -25px;
      }
    }
  }
}
</style>
