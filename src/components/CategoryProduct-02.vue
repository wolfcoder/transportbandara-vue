<template>
    <section class=" max-w-6xl mx-auto  py-8 md:my-16 lg:my-24 text-center ">
        <div class="bg-brandSecondary text-white py-1 px-5 rounded-full inline-block text-sm mb-3">Tour & Travel</div>
            <h2 class="text-2xl md:text-4xl font-semibold text-gray-800 mb-6 md:mb-5">Bingung di Bali mau kemana dan ngapain aja?</h2>
            <p class="mb-12 max-w-4xl mx-auto text-gray-400 px-4 md:px-0">
                Kami menyediakan banyak pilihan paket tour dan travel yang siap mengantarkan dan menemani liburanmu kemana saja, mulai dari tur 1 hari sampai 1 bulan kami siap melayani, silahkan pilih paketnya dan hubungi kami segera, karena terkadang kami kewalahan menerima tamu.
            </p>
         <ul class="grid grid-cols-1 sm:grid-cols-3 mx-auto gap-12 px-4 md:px-0">
            <CategoryProduct02Item v-for="index in 3" :key="index"/>
         </ul>
         <p class="my-12"> 
            <a class="group inline-flex py-1 gap-2 border-b border-gray-800 hover:border-brandPrimary" href="#">
          <span class="font-medium group-hover:text-brandPrimary ">Lihat Semua Pilihan Rental Mobil</span>
          <svg class="fill-gray-900 group-hover:fill-brandPrimary" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.21975 3.17271C8.3604 3.03211 8.55113 2.95313 8.75 2.95312C8.94887 2.95312 9.1396 3.03211 9.28025 3.17271L13.7803 7.67272C13.9209 7.81336 13.9998 8.00409 13.9998 8.20296C13.9998 8.40184 13.9209 8.59257 13.7803 8.73321L9.28025 13.2332C9.1388 13.3698 8.94935 13.4454 8.7527 13.4437C8.55605 13.442 8.36794 13.3631 8.22889 13.2241C8.08983 13.085 8.01095 12.8969 8.00924 12.7003C8.00754 12.5036 8.08313 12.3142 8.21975 12.1727L11.4395 8.95296H2.75C2.55109 8.95296 2.36032 8.87395 2.21967 8.73329C2.07902 8.59264 2 8.40188 2 8.20296C2 8.00405 2.07902 7.81329 2.21967 7.67264C2.36032 7.53198 2.55109 7.45296 2.75 7.45296H11.4395L8.21975 4.23321C8.07915 4.09257 8.00016 3.90184 8.00016 3.70296C8.00016 3.50409 8.07915 3.31336 8.21975 3.17271Z" />
</svg>
        </a>
        </p>
    </section>
   
</template>

<script>
 
    import CategoryProduct02Item from './CategoryProduct-02-item.vue';
     
    export default {
        name: "PageHome",
        components: { CategoryProduct02Item }
    }
    </script>