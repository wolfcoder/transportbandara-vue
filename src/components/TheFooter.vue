<template>
  <section
    id="footer-01"
    class="bg-brandPrimary md:mt-16 lg:mt-24 text-white p-4 sm:p-0"
  >
    <div class="max-w-6xl mx-auto py-8 md:flex flex-rows gap-16">
      <div class="w-full md:max-w-[305px] mb-12 md:mb-0">
        <h3 class="font-Inter font-extrabold mb-6 text-lg">TransportBandara</h3>
        <p class="mb-6">
          Liburan di Bali lebih menyenangkan bersama kami sejak dari bandara.
        </p>
        <ul>
          <li
            class="group border-brandPrimary border-b hover:border-b hover:border-white"
          >
            <a class="text-white inline-flex gap-3 cursor-pointer py-2">
              <img
                class=""
                src="../../public/icons/carbon_location-filled.svg"
                alt="Lo:"
              />
              <span
                >Jl. Srikandi No 201 , Blabatuh, Kota Gianyar, Bali 80581</span
              ></a
            >
          </li>
          <li
            class="group border-brandPrimary border-b hover:border-b hover:border-white"
          >
            <a class="text-white inline-flex gap-3 cursor-pointer py-2">
              <img class="" src="../../public/icons/ci_phone.svg" alt="Te:" />
              <span>+62-889-9999-7055</span></a
            >
          </li>
          <li
            class="group border-brandPrimary border-b hover:border-b hover:border-white"
          >
            <a class="text-white inline-flex gap-3 cursor-pointer py-2">
              <img
                class=""
                src="../../public/icons/bxl_whatsapp.svg"
                alt="Wh:"
              />
              <span>+62-889-9999-7055</span></a
            >
          </li>
          <li
            class="group border-brandPrimary border-b hover:border-b hover:border-white"
          >
            <a class="text-white inline-flex gap-3 cursor-pointer py-2">
              <img class="" src="../../public/icons/bi_line.svg" alt="Li:" />
              <span>speed70</span></a
            >
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        <div>
          <h3 class="font-inter mb-6 text-lg font-semibold">
            Syarat dan Ketentuan
          </h3>
          <ul>
            <li>
              <a
                href="/index"
                class="text-white inline-flex gap-3 cursor-pointer pb-2 hover:underline"
              >
                <span>Sewa Mobil Lepas Kunci</span></a
              >
            </li>
            <li>
              <a
                href="/index"
                class="text-white inline-flex gap-3 cursor-pointer py-2 hover:underline"
              >
                <span>Sewa Mobil Dengan Driver</span></a
              >
            </li>
            <li>
              <a
                class="text-white inline-flex gap-3 cursor-pointer py-2 hover:underline"
              >
                <span>Paket Tour & Travel</span></a
              >
            </li>
          </ul>
        </div>
        <div v-for="index in 2" :key="index">
          <h3 class="font-inter mb-6 text-lg font-semibold">Rental Mobil</h3>
          <ul>
            <li>
              <a
                class="text-white inline-flex gap-3 cursor-pointer pb-2 hover:underline"
              >
                <span>Rental City Car</span></a
              >
            </li>
            <li>
              <a
                class="text-white inline-flex gap-3 cursor-pointer py-2 hover:underline"
              >
                <span>Rental MPV Car</span></a
              >
            </li>
            <li>
              <a
                class="text-white inline-flex gap-3 cursor-pointer py-2 hover:underline"
              >
                <span>Rental SUV Car</span></a
              >
            </li>
            <li>
              <a
                class="text-white inline-flex gap-3 cursor-pointer py-2 hover:underline"
              >
                <span>Rental Mini Bus</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="text-center pb-6">
      © All rights reserved. Made with love 🤍 by pixelmedia.id
    </footer>
  </section>
</template>
