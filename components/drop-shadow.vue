<template>
  <div @click="this.$toggleSideBar" class="drop-shadow"></div>
</template>

<style>
.drop-shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: -2;
  will-change: opacity;
  background: rgba(0, 0, 0, 0.397);
  will-change: z-index, opacity;
  transition: opacity 0.3s ease-in-out;
}
</style>
