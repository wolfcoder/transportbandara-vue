<template>
    <section class="pt-16 pb-11 bg-black relative ">
        <div style="background-image: url('../images/airport-1920x1080.jpg');" class="bg-cover absolute top-0 bottom-0 left-0 right-0 opacity-30"></div>
    </section>
    <HeroCar />
    <CarCategoryProduct01 />
    <CarCategoryProduct02 />
    <CarCategoryProduct03 />
  </template>
   
   <script>
  import HeroCar from "../components/RentalMobilCategory/Hero-01.vue";
  import CarCategoryProduct01 from "../components/RentalMobilCategory/CarCategoryProduct-01.vue";
  import CarCategoryProduct02 from "../components/RentalMobilCategory/CarCategoryProduct-02.vue";
  import CarCategoryProduct03 from "../components/RentalMobilCategory/CarCategoryProduct-03.vue";
  
  export default {
    name: "RentalMobilCategory",
    components: {
      HeroCar,
      CarCategoryProduct01,
      CarCategoryProduct02,
      CarCategoryProduct03,
    },
  };
  </script>
    