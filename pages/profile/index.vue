<template>
  <div class="container full-height">
    <h1 class="heading-1">PROFILE</h1>
    <div class="info_profile">
      <h3 class="heading">My Info</h3>
      <div class="info-block">
        <p>Username:</p>
        <p>{{$auth.user.username}}</p>
      </div>
      <div class="info-block">
        <p>Email:</p>
        <p>{{$auth.user.email}}</p>
      </div>
      <div class="info-block">
        <p>Join date:</p>
        <p>{{$moment($auth.user.createdAt).format("dddd, MMMM Do YYYY")}}</p>
      </div>
    </div>
    <div class="trainings">
      <h3 class="heading">My Trainings</h3>
      <p class="no-data" v-show="!$auth.user.trainings.length">No trainings yet..</p>
      <ul v-show="$auth.user.trainings.length">
        <li v-for="training in $auth.user.trainings" :key="training._id">
          <nuxt-link :to="`/profile/trainings/${training.slug}`">{{training.name}}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  auth: true
};
</script>

<style lang='scss' scoped>
@import "@/assets/scss/variables.scss";
.no-data {
  text-align: center;
  width: max-content;
  margin: 0 auto;

  &:before {
    content: "_";
    display: block;
  }
}
.info_profile {
  background: $lightBackground;
  padding: 20px;
  margin-bottom: 30px;
}
.trainings {
  padding: 20px;

  ul {
    li {
      margin: 0 auto;
      text-align: center;
      margin-bottom: 10px;
      &:after {
        content: "_";
        display: block;
      }
    }
  }
}
.heading {
  margin: 0 auto;
  font-size: 26px;
  margin-bottom: 20px;
  text-align: center;
  padding-bottom: 5px;
}
.info-block {
  margin: 0 auto;
  max-width: 300px;
  margin-bottom: 10px;
  p {
    &:nth-of-type(1) {
      font-size: 16px;
      margin-bottom: 5px;
      color: rgba(0, 0, 0, 0.37);
    }
    &:nth-of-type(2) {
      font-size: 20px;
    }
  }

  &:after {
    content: "_";
    color: $mainOrange;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  p {
    text-align: center;
  }
}
</style>