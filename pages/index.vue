<template>
  <fragment>
    <top-section />
    <mission-section />
    <trainings-section />
    <values-section />
    <blog-section />
    <principles-section />
    <calendar-section />
    <improve-section />
    <vlog-section />
    <involve-section />
    <social-section />
  </fragment>
</template>

<script>
import TopSection from "@/components/main-page/top-section.vue";
import TrainingsSection from "@/components/main-page/trainings-section.vue";
import MissionSection from "@/components/main-page/mission-section.vue";
import ValuesSection from "@/components/main-page/values-section.vue";
import BlogSection from "@/components/main-page/blog-section.vue";
import PrinciplesSection from "@/components/main-page/principles-section.vue";
import CalendarSection from "@/components/main-page/calendar-section.vue";
import ImproveSection from "@/components/main-page/improve-section.vue";
import VlogSection from "@/components/main-page/vlog-section.vue";
import InvolveSection from "@/components/main-page/involve-section.vue";
import SocialSection from "@/components/main-page/social-section.vue";

export default {
  auth: false,
  head({ $seo }) {
    return $seo({
      title: "Fitness and Gymnastic training Programs",
      description:
        "Fitness and Gymnastic training Programs from Oleksyi Kononov",
      image: "/main-bg.jpg"
    });
  },
  components: {
    "top-section": TopSection,
    "trainings-section": TrainingsSection,
    "mission-section": MissionSection,
    "values-section": ValuesSection,
    "blog-section": BlogSection,
    "principles-section": PrinciplesSection,
    "calendar-section": CalendarSection,
    "improve-section": ImproveSection,
    "vlog-section": VlogSection,
    "involve-section": InvolveSection,
    "social-section": SocialSection
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.picture {
  width: 100%;
}
.paragraph {
  color: $mainOrange;

  font-size: 40px;
}
</style>
