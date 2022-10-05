<template>
  <TourDetailHero />

  <section class="grid grid-cols-12 lg:px-32 px-4">
    <TourDetailDesc />
    <section class="col-span-12 md:col-span-4">
      <TourDetailPacket />
      <TourDetailCategory />
      <TourDetailBanner />
    </section>
  </section>

  <TourDetailGallery />
  <TourDetailTerms />
</template>


<script>
import TourDetailHero from "../components/TourTravelDetail/TourDetailHero-01.vue";
import TourDetailDesc from "../components/TourTravelDetail/TourDetailDesc-01.vue";
import TourDetailPacket from "../components/TourTravelDetail/TourDetailPacket-01.vue";
import TourDetailCategory from "../components/TourTravelDetail/TourDetailCategory-01.vue";
import TourDetailBanner from "../components/TourTravelDetail/TourDetailBanner-01.vue";
import TourDetailTerms from "../components/TourTravelDetail/TourDetailTerms-01.vue";
import TourDetailGallery from "../components/TourTravelDetail/TourDetailGallery-01.vue";

export default {
  name: "TourTravelDetail",
  components: {
    TourDetailHero,
    TourDetailDesc,
    TourDetailPacket,
    TourDetailCategory,
    TourDetailBanner,
    TourDetailTerms,
    TourDetailGallery,
  },
};
</script>