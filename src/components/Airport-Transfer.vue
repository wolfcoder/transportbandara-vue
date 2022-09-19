<template>
  <section class="airptort-transfer max-w-5xl mx-auto py-8">
    <h2 class="underline uppercase text-gray-800 mb-4 md:pl-0 pl-4">Airport Transfer</h2>
    <div class="bg-gray-100 p-5 rounded-lg">
      <form action="#" method="POST" class=" grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
            <div>
              <label for="dari" class="block text-sm font-medium text-gray-600">Dari</label>
              <div class="mt-1">
                <input type="text" name="dari" id="dari" autocomplete="" class="block w-full rounded-md border-gray-300 py-2 px-4 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              </div>
            </div>
            <div>
              <label for="tujuan" class="block text-sm font-medium text-gray-600">Tujuan</label>
              <div class="mt-1">
                <input type="text" name="tujuan" id="tujuan" autocomplete="" class="block w-full rounded-md border-gray-300 py-2 px-4 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              </div>
            </div>
            <div>
              <label for="harga" class="block text-sm font-medium text-gray-600">Harga</label>
              <div class="mt-1">
                <input type="text" name="harga" id="harga" autocomplete="" class="block w-full rounded-md border-gray-300 py-2 px-4 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              </div>
            </div>
            <div>
              <label for="button" class="block text-sm font-medium text-transparent">.</label>
              <div class="mt-1">
                <button type="submit" class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-brandPrimary py-2 px-4 gap-4   text-white shadow-sm hover:bg-brandPrimary/80 focus:outline-none focus:ring-2 focus:ring-brandPrimary focus:ring-offset-2 sm:w-auto"><span>Pesan Sekarang</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.293 3.29279C10.4805 3.10532 10.7348 3 11 3C11.2652 3 11.5195 3.10532 11.707 3.29279L17.707 9.29279C17.8945 9.48031 17.9998 9.73462 17.9998 9.99979C17.9998 10.265 17.8945 10.5193 17.707 10.7068L11.707 16.7068C11.5184 16.8889 11.2658 16.9897 11.0036 16.9875C10.7414 16.9852 10.4906 16.88 10.3052 16.6946C10.1198 16.5092 10.0146 16.2584 10.0123 15.9962C10.01 15.734 10.1108 15.4814 10.293 15.2928L14.586 10.9998H3C2.73478 10.9998 2.48043 10.8944 2.29289 10.7069C2.10536 10.5194 2 10.265 2 9.99979C2 9.73457 2.10536 9.48022 2.29289 9.29268C2.48043 9.10514 2.73478 8.99979 3 8.99979H14.586L10.293 4.70679C10.1055 4.51926 10.0002 4.26495 10.0002 3.99979C10.0002 3.73462 10.1055 3.48031 10.293 3.29279Z" fill="white"/>
</svg>

                </button>
              </div>
            </div>
          </form>
    </div>
  </section>
</template>