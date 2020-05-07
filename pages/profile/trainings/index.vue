<template>
  <div class="container full-height">
    <h1 class="heading-1">My Trainings</h1>
    <ul v-show="$auth.user.trainings.length" class="wrapper">
      <li v-for="training in $auth.user.trainings" :key="training._id">
        <img :src="training.image + '.jpg'" :alt="training.name" />
        <div>
          <h3>{{training.name}}</h3>
          <p>Level: {{training.level}}</p>
          <p>Duration: {{training.duration}}</p>
        </div>
        <button @click="$router.push(`/profile/trainings/${training.slug}`)" class="button">
          <span>Start</span>
        </button>
      </li>
    </ul>
    <p class="no-trainings" v-show="!$auth.user.trainings.length">No trainings yet...</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.no-trainings {
  text-align: center;
  &:before {
    content: "_";
    display: block;
  }
}
.wrapper {
  display: grid;
  grid-gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  li {
    display: grid;
    grid-template-columns: 140px 1fr max-content;
    grid-gap: 20px;
    align-items: center;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.199);
    padding: 20px;
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
      box-shadow: 0px 0px 13px 7px rgba(0, 0, 0, 0.149);
    }
    div {
      h3 {
        font-size: 24px;
        font-family: "robotoMedium";
        margin-bottom: 8px;
      }
    }
    p {
      &:nth-of-type(1) {
        margin-bottom: 8px;
      }
    }
    button {
      padding: 15px 55px;
      border-radius: 2px;
      transform: skewX(-10deg);
      span {
        display: inline-block;
        color: white;
        transform: skewX(10deg);
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>