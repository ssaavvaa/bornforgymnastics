<template>
  <div class="wrapper full-height">
    <div class="training-data">
      <h2 class="training-data__name">{{training.name}}</h2>
      <ul>
        <li
          class="training-data__mainli"
          v-for="(complex , i) in training.training_program"
          :key="i"
        >
          <h3 @click="showVideos" class="training-data__heading">
            {{complex.heading}}
            <big-arrow-icon />
          </h3>
          <ul class="training-data__videos">
            <li
              @click="setVideoSrc(data.video)"
              class="training-data__video"
              v-for="(data,i) in complex.videos"
              :key="i"
            >
              <h4 class="training-data__video-heading">{{data.heading}}</h4>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="training-video">
      <iframe
        class="training_iframe"
        :src="training.training_program[0].videos[0].video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ payload, app: { store }, params: { slug } }) {
    if (payload) {
      return { training: payload };
    }
    const training = store.state.trainings.find(val => val.slug === slug);
    return { training };
  },
  methods: {
    showVideos({ currentTarget }) {
      const videos = currentTarget.parentNode.querySelector(
        ".training-data__videos"
      );
      currentTarget.classList.toggle("rotate-arrow");
      return videos.classList.toggle("show-videos");
    },
    setVideoSrc(src) {
      const iframe = document.querySelector(".training_iframe");
      iframe.src = src;
    }
  },
  mounted() {
    if (process.client || process.browser) {
      const allVideos = document.querySelectorAll(".training-data__videos");
      allVideos.forEach(x => {
        const lastChild = x.lastElementChild.querySelector(
          ".training-data__video-heading"
        );
        lastChild.classList.add("lastElem");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.training_iframe {
  width: 100%;
  min-height: 80vh;
}

.wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
}

.training-data__mainli {
  background: white;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.295);
}

.training-data__name {
  padding: 20px;
  font-size: 26px;
  color: $mainOrange;
}

.lastElem {
  &:after {
    content: "" !important;
  }
}

.training-data__video-heading {
  cursor: pointer;
  margin-bottom: 10px;
  font-family: $myriadLight;
  text-align: left !important;
  &:after {
    content: "_";
    display: block;
    color: rgba(0, 0, 0, 0.233);
  }
}

.training-data__heading.rotate-arrow {
  svg {
    transform: rotate(90deg);
  }
}

.training-data__heading {
  font-family: $robotoLight;
  text-align: left !important;
  font-size: 20px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.295);
  padding: 20px;
  background: rgba(0, 0, 0, 0.075);
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 7px;
  align-items: center;
  svg {
    width: 100%;
    height: auto;
    transform: rotate(-90deg);
  }
}

.training-data__videos.show-videos {
  max-height: 500px;
  padding: 20px;
}

.training-data__videos {
  max-height: 0;
  padding: 0px 20px;
  overflow-y: hidden;
  transition: max-height, padding 0.3s cubic-bezier(0, 1, 0.5, 1);
}

.training-data {
  height: 100vh;
  overflow-y: auto;
  background: $lightBackground;
  * {
    text-align: center;
  }
}
</style>