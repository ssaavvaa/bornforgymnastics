<template>
  <section>
    <div class="container">
      <h2 class="heading-2">My values</h2>
      <ul>
        <li>
          <heart-icon />
          <p>Health is a top priority</p>
        </li>
        <li>
          <enjoy-icon />
          <p>Pleasure lies in movements, skills, sensations</p>
        </li>
        <li>
          <progress-icon />
          <p>Progress in every movement with focus on development</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

section {
  background: url("/values-bg.jpg") no-repeat center center/cover;
  h2 {
    color: white;
  }
}

div {
  max-width: 970px;

  ul {
    li {
      display: grid;
      grid-gap: 60px;
      align-items: center;
      grid-template-columns: 50px 1fr;
      margin-bottom: 25px;
      &:nth-of-type(2) {
        position: relative;
        left: 100px;
      }
      &:nth-of-type(3) {
        position: relative;
        left: 200px;
      }
      p {
        color: white;
        font-size: 22px;
        font-family: $myriadMedium;
        line-height: 1.4;
      }
      svg {
        width: 100%;
        height: auto;
        padding: 23px 20px;
        fill: $mainOrange;
        background: rgba(38, 38, 38, 0.7);
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  section {
    background: url("/values-bg-phone.jpg") no-repeat center center/cover;
  }
  div {
    ul {
      li {
        grid-gap: 15px;

        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 40px;
        &:nth-of-type(2) {
          position: relative;
          left: 0px;
        }
        &:nth-of-type(3) {
          position: relative;
          left: 0px;
        }
        p {
          text-align: center;
          max-width: 85%;
          font-size: 20px;
        }
        svg {
          width: 67px;
        }
      }
    }
  }
}
</style>
