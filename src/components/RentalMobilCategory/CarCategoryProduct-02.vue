<template>
  <section class="max-w-6xl mx-auto py-8 md:my-16 lg:my-24 text-center">
    <div
      class="bg-brandSecondary text-white py-1 px-5 rounded-full inline-block text-sm mb-3"
    >
      MPV
    </div>
    <h2 class="text-2xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-5">
      Pilih mobil yang sesuai dengan kebutuhanmu
    </h2>
    <p class="mb-12 max-w-4xl mx-auto text-gray-400 px-4 md:px-0">
      Dengan banyaknya pilihan mobil yang bisa kamu rental, kamu bisa mencoba
      satu per satu yang kamu mau, berkendara di Bali tentu saja akan memberikan
      pengalaman liburan yang mengasyikan, tapi ingat jaga selalu keselamatan.
    </p>
    <ul class="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-12 px-4 md:px-0">
      <CarCategoryProduct02Item v-for="index in 3" :key="index" />
    </ul>
  </section>
</template>

<script>
import CarCategoryProduct02Item from './CarCategoryProduct-02-Item.vue';
export default {
  name: 'CarPage',
  components: { CarCategoryProduct02Item },
};
</script>
