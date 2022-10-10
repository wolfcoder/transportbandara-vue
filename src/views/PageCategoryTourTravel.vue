<template>
      <section class="pt-16 pb-11 bg-black relative ">
        <div style="background-image: url('../images/airport-1920x1080.jpg');" class="bg-cover absolute top-0 bottom-0 left-0 right-0 opacity-30"></div>
    </section>
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