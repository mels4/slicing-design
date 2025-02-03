<script setup lang="ts">
  import handphone from '@assets/images/handphone.svg'
</script>

<template>
  <section>
    <div class="relative w-full bg-violet-700 mt-14 flex justify-between">
      <div class="max-w-screen px-12">
          <h1 class="text-5xl font-bold text-white py-36">Protigamas</h1>
          <h2 class="text-white text-4xl">Portal pelayanan dalam satu genggaman</h2>
          <p class="text-white text-justify w-[700px] mt-8">
              Memudahkan Anda untuk memenuhi semua kebutuhan dalam satu tempat. Temukan berbagai produk dan layanan, belanja dengan mudah, dan nikmati pengalaman transaksi yang cepat dan aman. Semua kebutuhan Anda, kini lebih praktis!
          </p>
          <button class="text-xl mt-7 bg-yellow-300 font-medium py-2 px-4 rounded-md shadow-sm drop-shadow-md hover:bg-yellow-400">
              Unduh Sekarang
          </button>
      </div>
      <div class="pl-4">
          <img :src="handphone" alt="Handphone" class="w-full h-auto">
      </div>
    </div>
  </section>
</template>
