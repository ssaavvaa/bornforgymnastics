<template>
  <section class="top-section">
    <div class="container-top-main">
      <div>
        <h3>Olexiy Kononov Team</h3>
        <h1>
          уникальные
          <br />программы тренировок, воркшопы, статьи
        </h1>
        <p>
          От мастера спорта по спортивной гимнастике и артиста Cirque DuSoleil
          Алексея Кононова
        </p>
        <button @click="$router.push('/trainings')">
          <span>To Trainings</span>
        </button>
      </div>
      <ul>
        <li>
          <h6>
            <span>25+</span> years
          </h6>
          <p>Sport Gymnastic</p>
        </li>
        <li>
          <h6>
            <span>10+</span> years
          </h6>
          <p>Sport Gymnastic</p>
        </li>
        <li>
          <h6>
            <span>100+</span> years
          </h6>
          <p>Sport Gymnastic</p>
        </li>
        <li>
          <h6>
            <span>25+</span> years
          </h6>
          <p>Sport Gymnastic</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.container-top-main {
  max-width: 1170px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 120px 20px 210px 20px;

  * {
    color: white;
  }
  & > div {
    h3 {
      font-size: 18px;
      margin-bottom: 36px;
      font-weight: 400;
      font-family: $myriadMedium;
    }
    h1 {
      font-size: 36px;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 1.5;
      max-width: 540px;
      margin-bottom: 36px;
      font-family: $myriadMedium;
    }
    p {
      line-height: 1.5;
      font-size: 18px;
      font-weight: 500;
      max-width: 400px;
      margin-bottom: 100px;
      font-family: $myriadMedium;
    }

    button {
      padding: 23px 55px;
      transform: skewX(-20deg);
      position: relative;
      left: 20px;
      span {
        display: inline-block;
        transform: skewX(20deg);
      }
    }
  }
  & > ul {
    justify-self: flex-end;
    li {
      p {
        font-size: 14px;
      }
      h6 {
        font-size: 14px;
        span {
          font-family: $mainFontBlack;
          font-size: 24px;
        }
      }
      max-width: 250px;
      text-align: center;
      margin-bottom: 50px;
    }
  }
}
.top-section {
  background: url("/main-bg.jpg") no-repeat center center / cover;
}
</style>
