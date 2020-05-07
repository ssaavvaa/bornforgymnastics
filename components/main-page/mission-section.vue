<template>
  <div class="container-mission">
    <div class="container">
      <h3>
        <brackets />
        <span>
          My Mission:
          <br />To Involve people into a healthy lifestyle
          <br />by means of Gymnastics. To Improve myself inspiring you for
          action
        </span>
        <brackets />
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.container-mission {
  padding: 0px 30px;
  border-bottom: 2px solid black;
}
h3 {
  font-family: $myriadMedium;
  position: relative;
  max-width: max-content;
  margin: 0 auto;
  span {
    position: relative;
    line-height: 1.6;
    z-index: 3;
    font-size: 26px;
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
</style>
