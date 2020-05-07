<template>
  <div class="rating-wrapper">
    <div @mouseleave="onMouseLeave" class="stars-wrapper-empty">
      <div>
        <star-icon data-value="1" data-percent="20" @mouseenter="onHover" />
      </div>
      <div>
        <star-icon data-value="2" data-percent="40" @mouseenter="onHover" />
      </div>
      <div>
        <star-icon data-value="3" data-percent="60" @mouseenter="onHover" />
      </div>
      <div>
        <star-icon data-value="4" data-percent="80" @mouseenter="onHover" />
      </div>
      <div>
        <star-icon data-value="5" data-percent="100" @mouseenter="onHover" />
      </div>
    </div>
    <div @mouseleave="onMouseLeave" class="stars-wrapper-full">
      <div>
        <star-icon data-value="1" data-percent="20" @mouseenter="onHover" />
      </div>
      <div>
        <star-icon data-value="2" data-percent="40" @mouseenter="onHover" />
      </div>
      <div>
        <star-icon data-value="3" data-percent="60" @mouseenter="onHover" />
      </div>
      <div>
        <star-icon data-value="4" data-percent="80" @mouseenter="onHover" />
      </div>
      <div>
        <star-icon data-value="5" data-percent="100" @mouseenter="onHover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rating",
  props: ["rating", "readOnly"],

  data() {
    return {
      screenWidth: 1920
    };
  },
  methods: {
    onMouseLeave({ target }) {
      if (!this.readOnly) {
        const parent = target.classList.contains("stars-wrapper-full")
          ? target
          : target.nextElementSibling;
        parent.style.width = `${this.rating * 20}%`;
        parent.classList.remove("stars-hover");
      }
    },
    onHover({ target }) {
      if (!this.readOnly) {
        const percent = target.getAttribute("data-percent");

        const parent = target.closest(".stars-wrapper-full")
          ? target.closest(".stars-wrapper-full")
          : target.closest(".stars-wrapper-empty").nextElementSibling;
        parent.classList.add("stars-hover");
        parent.style.width = `${percent}%`;
      }
    }
  }
};
</script>

<style scoped>
.rating-wrapper {
  width: max-content;
  position: relative;
}
.stars-wrapper-full,
.stars-wrapper-empty {
  width: 100%;
  display: grid;
  grid-template-columns: 25px 25px 25px 25px 25px;
  grid-gap: 5px;
  position: relative;
  height: max-content;
}

.stars-wrapper-full,
.stars-wrapper-empty div svg {
  stroke: black;
  width: 100%;
  height: auto;
  stroke-width: 5;
}

.stars-wrapper-empty div svg {
  fill: transparent;
}
.stars-wrapper-full div svg {
  fill: var(--mainOrange);
}

.stars-wrapper-full {
  position: absolute;
  width: 0%;
  z-index: 1;
  overflow-x: hidden;
  top: 0px;
  left: 0px;
}

.stars-hover {
  cursor: pointer;
}
</style>
