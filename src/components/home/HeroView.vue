<script setup lang="ts">
import bgHero from "@assets/images/bg-hero.svg";
import gambarHero from "@assets/images/gambar-hero.png";
import canon from "@assets/images/canon.png";
import garudafood from "@assets/images/garudafood.png";
import nike from "@assets/images/nike.png";
import polytron from "@assets/images/polytron.png";
import duakelinci from "@assets/images/duakelinci.png";
import samsung from "@assets/images/samsung.png";
</script>

<template>
  <section class="relative lg:[height:calc(100vh-120px)] flex flex-col justify-center items-center text-white px-4">
    <div class="absolute w-full h-full">
      <img :src="bgHero" alt="Background Hero" class="w-full h-full" />
    </div>

    <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl gap-12">
      <div class="relative max-w-lg text-left">
        <h1 class="text-4xl lg:text-3xl mb-14 leading-snug">
          Protigamas merupakan Holding Company yang mengembangkan beberapa proyek
        </h1>
        <div class="flex flex-wrap justify-start gap-6">
          <button class="bg-purple-800 hover:bg-purple-700 rounded-lg px-8 py-3 text-md font-medium transition">
            Mining Crypto Center
          </button>
          <button class="bg-purple-800 hover:bg-purple-700 rounded-lg px-8 py-3 text-md font-medium transition">
            Wisata Religi & Luar Negeri
          </button>
          <button class="bg-purple-800 hover:bg-purple-700 rounded-lg px-8 py-3 text-md font-medium transition">
            Property
          </button>
          <button class="bg-purple-800 hover:bg-purple-700 rounded-lg px-8 py-3 text-md font-medium transition">
            Produk Otomotif
          </button>
          <button class="bg-purple-800 hover:bg-purple-700 rounded-lg px-8 py-3 text-md font-medium transition">
            Marketplace
          </button>
        </div>
      </div>

      <div class="relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0 lg:ml-8 lg:w-1/2">
        <img :src="gambarHero" alt="Proyek Protigamas" class="w-full max-w-md lg:max-w-md rounded-lg" />
      </div>
    </div>
  </section>
  <div class="relative z-20 flex flex-col items-center mt-10 w-full px-4">
    <div class="p-6 rounded-lg w-full max-w-4xl text-center">
      <div class="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
        <img :src="canon" alt="Canon" class="h-10 mx-auto" />
        <img :src="garudafood" alt="GarudaFood" class="h-10 mx-auto" />
        <img :src="nike" alt="Nike" class="h-10 mx-auto" />
        <img :src="polytron" alt="Polytron" class="h-10 mx-auto" />
        <img :src="duakelinci" alt="Dua Kelinci" class="h-10 mx-auto" />
        <img :src="samsung" alt="Samsung" class="h-10 mx-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
button:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}
</style>
