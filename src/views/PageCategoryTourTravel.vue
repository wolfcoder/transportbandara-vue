<template>
  <TourHero/>
  <TourProduct01/>
  <TourProduct02/>
  <TourProduct03/>
</template>

<script>
  import TourHero  from '../components/TourTravelCategory/TourHero-01.vue'
  import TourProduct01 from "../components/TourTravelCategory/TourCategoryProduct-01.vue";
  import TourProduct02 from "../components/TourTravelCategory/TourCategoryProduct-02.vue";
  import TourProduct03 from "../components/TourTravelCategory/TourCategoryProduct-03.vue";
  
  export default {
    name: "TourTravelCategory",
    components: {
      TourHero,
      TourProduct01,
      TourProduct02,
      TourProduct03
    },
  };
</script>