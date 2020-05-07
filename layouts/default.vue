<template>
  <fragment>
    <kononov-header />
    <sidebar />
    <main>
      <nuxt />
    </main>
    <kononov-footer />
    <drop-shadow />
  </fragment>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import sidebar from "@/components/sidebar";
import DropShadow from "@/components/drop-shadow";

export default {
  components: {
    "kononov-header": Header,
    "kononov-footer": Footer,
    sidebar,
    "drop-shadow": DropShadow
  }
};
</script>
