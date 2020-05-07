<template>
  <section class="container">
    <h2 class="heading-2">Vlog</h2>
    <div class="wrapper">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/Z6Q7bDaFj28"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="info">
        <p>My Mission</p>
        <p>To invlove people into a healthy lifestyle by means of Gymnastic</p>
        <p>To improve myself inspiring you for an action</p>
        <p>Play out of you box</p>
        <a
          href="https://www.youtube.com/channel/UCXWoa3ET1_bN_gSXXKf9hrg"
          target="_blank"
          class="arrow-text to-vlog"
          >To Vlog <arrow-icon
        /></a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

section {
  h2 {
    text-align: left;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

.info {
  p {
    font-family: $myriadMedium;
    margin-bottom: 13px;
    font-size: 20px;
    max-width: 400px;
  }
  a {
    max-width: 400px;
  }
}

.to-vlog {
  margin-top: 40px;
  color: $mainOrange;
  font-family: $robotoBold !important;
  svg {
    fill: $mainOrange;
  }
}

@media only screen and (max-width: 768px) {
  section {
    h2 {
      text-align: center;
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
}
.info {
  p {
    margin-bottom: 10px;
    font-size: 18px;
    max-width: 400px;
  }
  a {
    max-width: 400px;
  }
}
</style>
