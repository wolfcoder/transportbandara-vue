<template>
  <header id="header" class="max-w-7xl mx-auto absolute top-0 left-0 right-0 bottom-0 py-5" :class="[ isHidden ? 'z-10' : 'z-50' ]">
    <!-- Menu Mobile-->
      <div class="flex justify-between py-4 md:hidden  px-4 md:px-0">
        <h1 class="text-brandPrimary font-Inter font-extrabold"><a href="/">Transport Bandara</a></h1>
        <div @click="onToggleChange">
          <svg v-if="isHidden" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#1B96BC" />
            <path d="M7.5 16.25H17.5M7.5 8.75H17.5H7.5ZM7.5 12.5H12.5H7.5Z" stroke="white" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#1B96BC"/>
<path d="M15.25 8.75L8.75 15.25M8.75 8.75L15.25 15.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
      </div>
    <!-- END Menu Mobile-->
    <!-- Menu Tablet Desktop-->
    <div id="menu" class="md:block bg-white md:bg-transparent h-screen md:h-auto transition ease-in-out delay-150" :class="{ hidden: isHidden }">
      <nav class="flex flex-col-reverse md:flex-row justify-between pt-4 mt-6 md:mt-0 leading-6 gap-y-4 md:px-4 ">
        <ul class="flex md:gap-6 flex-col md:flex-row">
          <li class="hidden md:block"><a href="/">
              <h1 class="text-white font-Inter font-extrabold">TransportBandara</h1>
            </a></li>
          <li><a href="/category-rental-mobil"
              class="text-gray-800 md:text-white font-light flex gap-3 justify-between py-2 md:py-0 px-4 md:px-0 hover:underline hover:text-brandPrimary"><span>Rental
                Mobil</span>
              <svg class="stroke-gray-400 md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a></li>
          <li><a href="/category-tour-travel"
              class="text-gray-800 md:text-white  font-light flex gap-3 justify-between py-2 md:py-0 px-4 md:px-0 hover:underline hover:text-brandPrimary"><span>Tour
                & Travel</span> <svg class="stroke-gray-400 md:hidden" width="24" height="24" viewBox="0 0 24 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></a></li>
          <li><a href="/#airport-transfer"
              class="text-gray-800 md:text-white font-light flex gap-3 justify-between py-2 md:py-0 px-4 md:px-0 hover:underline hover:text-brandPrimary"><span>Airport
                Transfer</span> <svg class="stroke-gray-400 md:hidden" width="24" height="24" viewBox="0 0 24 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></a></li>

        </ul>
        <ul class="flex gap-4 md:gap-8 justify-between px-4 md:px-0">
          <li class="uppercase text-gray-800 md:text-white text-xs leading-6 align-middle font-semibold">Perlu Bantuan?</li>
          <li><a class="bg-brandPrimary hover:bg-brandPrimary/80 text-white py-1 px-5 rounded-full flex gap-3  cursor-pointer -m-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H5.153C5.38971 2.00011 5.6187 2.08418 5.79924 2.23726C5.97979 2.39034 6.10018 2.6025 6.139 2.836L6.879 7.271C6.91436 7.48222 6.88097 7.69921 6.78376 7.89003C6.68655 8.08085 6.53065 8.23543 6.339 8.331L4.791 9.104C5.34611 10.4797 6.17283 11.7293 7.22178 12.7782C8.27072 13.8272 9.52035 14.6539 10.896 15.209L11.67 13.661C11.7655 13.4695 11.9199 13.3138 12.1106 13.2166C12.3012 13.1194 12.5179 13.0859 12.729 13.121L17.164 13.861C17.3975 13.8998 17.6097 14.0202 17.7627 14.2008C17.9158 14.3813 17.9999 14.6103 18 14.847V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H15C7.82 18 2 12.18 2 5V3Z"
                  fill="white" />
              </svg>

              <span>+62-889-9999-7055</span></a></li>
        </ul>
      </nav>
    </div>
    <!-- Menu Tablet Desktop-->
  </header>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true,
    
    }
  },
  methods: {
    onToggleChange() {
      let htmlBody = document.getElementsByTagName('body');
      let menu = document.getElementById('menu');
      // menu.classList.toggle('left-[-250px]');
      // menu.classList.toggle('left-0')

      if (htmlBody[0].style.overflow === '' || htmlBody[0].style.overflow === 'scroll') {
        htmlBody[0].style.overflow = 'hidden'
      } else {
        htmlBody[0].style.removeProperty('overflow')
      }
      this.isHidden = !this.isHidden;
    }
  },
};
</script>