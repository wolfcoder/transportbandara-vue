<template>
  <section class="max-w-6xl mx-auto py-8 md:my-16 lg:my-24 text-center">
    <div
      class="bg-brandSecondary text-white py-1 px-5 rounded-full inline-block text-sm mb-3"
    >
      Tour Tempat Wisata
    </div>
    <h2 class="text-2xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-5">
      Bingung di Bali mau kemana dan ngapain aja?
    </h2>
    <p class="mb-12 max-w-4xl mx-auto text-gray-400 px-4 md:px-0">
      Kami menyediakan banyak pilihan paket tour dan travel yang siap
      mengantarkan dan menemani liburanmu kemana saja, mulai dari tur 1 hari
      sampai 1 bulan kami siap melayani, silahkan pilih paketnya dan hubungi
      kami segera, karena terkadang kami kewalahan menerima tamu
    </p>
    <div class="relative w-full overflow-x-auto pb-4">
      <ul
        class="inline-flex mx-auto px-4 md:px-0 space-x-8 sm:mx-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-x-0"
      >
        <TourCategoryProduct02Item v-for="index in 3" :key="index" />
      </ul>
    </div>
  </section>
</template>

<script>
import TourCategoryProduct02Item from './TourCategoryProduct-02-item.vue';
export default {
  name: 'TourPage',
  components: { TourCategoryProduct02Item },
};
</script>
