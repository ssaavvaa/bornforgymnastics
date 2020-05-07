import Vue from "vue";

Vue.prototype.$toggleSideBar = () => {
  setTimeout(() => {
    document.querySelector(".drop-shadow").classList.toggle("show-drop-shadow");
    document.querySelector("aside").classList.toggle("toggle-sidebar");
    document.querySelector("body").classList.toggle("disable_scroll");
  }, 100);
};
