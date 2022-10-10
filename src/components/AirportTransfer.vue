<template>
  <section id="airport-transfer"
    class="airport-transfer max-w-6xl mx-auto py-0 md:py-16 lg:py-40 relative z-20 px-4 md:px-0"
  >
  <h1 class="text-white text-center py-12 md:py-20 text-2xl md:text-5xl md:leading-normal font-semibold">Mau Pergi kemana saja, <br> Kami siap Mengantar anda</h1>
    <div class="bg-gray-100 p-5 rounded-lg">
      <form
        action="#"
        method="POST"
        class="grid grid-cols-1 gap-y-6 sm:grid-cols-5 sm:gap-x-8"
      >
        <div>
          <label for="dari" class="block text-sm font-medium text-gray-600"
            >Dari</label
          >
          <div class="mt-1">
            <input
              readonly
              type="text"
              name="harga"
              id="harga"
              autocomplete=""
              value="Bandara Ngurah Rai"
              class="block w-full rounded-md border-gray-300 py-2 px-4 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div>
          <label for="tujuan" class="block text-sm font-medium text-gray-600"
            >Tujuan</label
          >
          <div class="mt-1">
            <select
              @change="onDestinationChange($event)"
              type="text"
              name="tujuan"
              id="tujuan"
              autocomplete=""
              class="block w-full rounded-md border-gray-300 py-2 px-4 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option :value="index" v-for="(item, index) in post" :key="index">
                {{ item.tujuan }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <label for="tujuan" class="block text-sm font-medium text-gray-600"
            >Kendaraan</label
          >
          <div class="mt-1">
            <select
              @change="onVehicleChange($event)"
              type="text"
              name="tujuan"
              id="tujuan"
              autocomplete=""
              class="block w-full rounded-md border-gray-300 py-2 px-4 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option
                :value="index"
                v-for="(item, index) in vehicle"
                :key="index"
              >
                {{ item.kendaraan }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <label for="harga" class="block text-sm font-medium text-gray-600"
            >Harga</label
          >
          <div class="mt-1">
            <input
              readonly
              type="text"
              name="harga"
              id="harga"
              autocomplete=""
              :value="price"
              class="block w-full rounded-md border-gray-300 py-2 px-4 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div>
          <label for="button" class="block text-sm font-medium text-transparent"
            >.</label
          >
          <div class="mt-1">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-brandPrimary py-2 px-4 gap-2 text-white shadow-sm hover:bg-brandPrimary/80 focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:ring-offset-2 sm:w-auto"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7587 13.7904C17.7119 13.768 15.9623 12.9064 15.6513 12.7945C15.5244 12.7489 15.3884 12.7044 15.2438 12.7044C15.0076 12.7044 14.8091 12.8222 14.6545 13.0535C14.4797 13.3132 13.9506 13.9317 13.7871 14.1165C13.7658 14.1409 13.7366 14.17 13.7192 14.17C13.7035 14.17 13.4328 14.0585 13.3508 14.0229C11.4739 13.2076 10.0492 11.247 9.85387 10.9164C9.82597 10.8688 9.8248 10.8472 9.82457 10.8472C9.83143 10.8221 9.89455 10.7588 9.92712 10.7262C10.0224 10.6319 10.1257 10.5076 10.2256 10.3874C10.2729 10.3304 10.3202 10.2734 10.3668 10.2196C10.5117 10.051 10.5762 9.92005 10.651 9.76842L10.6902 9.68964C10.8729 9.32675 10.7169 9.02052 10.6664 8.92164C10.6251 8.83888 9.88629 7.05587 9.80774 6.86855C9.61886 6.41652 9.36927 6.20605 9.02244 6.20605C8.99026 6.20605 9.02244 6.20605 8.88748 6.21174C8.72314 6.21868 7.82821 6.3365 7.43252 6.58592C7.01291 6.85047 6.30304 7.69374 6.30304 9.17676C6.30304 10.5115 7.15005 11.7717 7.51371 12.251C7.52275 12.2631 7.53935 12.2876 7.56343 12.3229C8.95613 14.3568 10.6923 15.8641 12.4523 16.5672C14.1468 17.244 14.9491 17.3223 15.4053 17.3223C15.4053 17.3223 15.4053 17.3223 15.4053 17.3223C15.597 17.3223 15.7505 17.3072 15.8858 17.2939L15.9717 17.2857C16.557 17.2338 17.8434 16.5673 18.136 15.7542C18.3665 15.1137 18.4272 14.414 18.2739 14.16C18.1689 13.9874 17.9878 13.9005 17.7587 13.7904Z" fill="white"></path><path d="M12.2133 0C5.71332 0 0.425213 5.24836 0.425213 11.6995C0.425213 13.786 0.983602 15.8284 2.04139 17.6159L0.0167455 23.5883C-0.0209688 23.6996 0.00708318 23.8227 0.0894468 23.9066C0.148901 23.9673 0.229551 24 0.311914 24C0.343473 24 0.375265 23.9952 0.406278 23.9853L6.63381 22.0064C8.33796 22.917 10.264 23.3976 12.2133 23.3976C18.7127 23.3977 24.0002 18.1498 24.0002 11.6995C24.0002 5.24836 18.7127 0 12.2133 0ZM12.2133 20.9606C10.3791 20.9606 8.60251 20.4309 7.07539 19.4289C7.02404 19.3951 6.96443 19.3778 6.90443 19.3778C6.87272 19.3778 6.84093 19.3826 6.80999 19.3925L3.69038 20.3841L4.69745 17.413C4.73002 17.3169 4.71373 17.2108 4.65373 17.1288C3.49082 15.5398 2.8761 13.6625 2.8761 11.6995C2.8761 6.59221 7.06472 2.43709 12.2132 2.43709C17.361 2.43709 21.5492 6.59221 21.5492 11.6995C21.5493 16.8061 17.3612 20.9606 12.2133 20.9606Z" fill="white"></path></svg>
              <span>Pesan Sekarang</span>
              
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: [
        {
          tujuan: 'Kuta/Legian',
          pilihan_repeater: [
            { kendaraan: 'Avanza/Xenia', harga: 150000 },
            {
              kendaraan: 'Inova Reborn',
              harga: 300000,
            },
            { kendaraan: 'Haice Commuter', harga: 400000 },
          ],
        },
        {
          tujuan: 'Seminyak',
          pilihan_repeater: [
            { kendaraan: 'Avanza/Xenia', harga: 200000 },
            {
              kendaraan: 'Inova Reborn',
              harga: 300000,
            },
            { kendaraan: 'Haice Commuter', harga: 400000 },
          ],
        },
        {
          tujuan: 'Canggu',
          pilihan_repeater: [
            { kendaraan: 'Avanza/Xenia', harga: 249996 },
            {
              kendaraan: 'Inova Reborn',
              harga: 350000,
            },
            { kendaraan: 'Haice Commuter', harga: 400000 },
          ],
        },
      ],
      price: null,
      vehicle: [
        { kendaraan: 'Avansa/Xenia', harga: 150000 },
        {
          kendaraan: 'Inova Reborn',
          harga: 300000,
        },
        { kendaraan: 'Haice Commuter', harga: 400000 },
      ],
    };
  },
  methods: {
    // fetchData() {
    //     console.log('fetch data')
    //     this.error = this.post = null
    //     this.loading = true
    //     fetch('<?php echo site_url() . '/wp-json/wp/v2/pages/40'?>')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.post = data;
    //             this.loading = false
    //         });
    // },

    onDestinationChange(event) {
      // console.log(event.target.value)
      this.vehicle = this.post[event.target.value].pilihan_repeater;
    },

    onVehicleChange(event) {
      console.log(event.target.value);
      this.price = this.vehicle[event.target.value].harga;
    },
  },
};
</script>
