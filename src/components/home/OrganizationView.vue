<script setup lang="ts">
import TitleItem from '@components/TitleItem.vue'
import sumarlan from '@assets/images/sumarlan.png'
import safruddin from '@assets/images/msafruddin.png'
import suseno from '@assets/images/suseno.png'
import lidya from '@assets/images/lidya.png'
import edy from '@assets/images/edyharyono.png'
import gdesign from '@assets/images/grapicdesign.png'
import sosmed from '@assets/images/sosmedspesialis.png'
import marketing from '@assets/images/Marketing.png'
import cwriter from '@assets/images/CopyWriter.png'
import webdev from '@assets/images/WebDeveloper.png'
import mobile from '@assets/images/MobileDeveloper.png'

const executives = [
  { name: 'Sumarlan', role: 'CEO', image: sumarlan },
  { name: 'M. Safruddin, SE', role: 'CTO', image: safruddin },
  { name: 'Suseno, SM', role: 'CAO', image: suseno },
  { name: 'Lydia A., SE', role: 'COO', image: lidya },
  { name: 'Edy Haryono, SE', role: 'CFO', image: edy }
];

const productionTeam = [
  { title: 'Graphic Designer', image: gdesign },
  { title: 'Sosmed Spesialis', image: sosmed },
  { title: 'Marketing', image: marketing },
  { title: 'Copy Writer', image: cwriter },
  { title: 'Web Developer', image: webdev },
  { title: 'Mobile Developer', image: mobile }
];
</script>


<template>
  <section class="min-h-screen w-full">
    <TitleItem title="Organisasi Perusahaan" />

    <!-- Struktur Organisasi -->
    <div class="flex justify-center items-center gap-16 flex-wrap mt-8">
      <div v-for="person in executives" :key="person.name" class="flex items-center gap-4">
        <img :src="person.image" :alt="person.name" class="w-25 h-25 rounded-full" />
        <div class="text-left">
          <h3 class="font-semibold text-lg">{{ person.name }}</h3>
          <p class="text-gray-600 text-sm">{{ person.role }}</p>
        </div>
      </div>
    </div>

    <!-- Tim Produksi -->
    <h2 class="text-2xl font-bold text-left w-full mt-20 mb-4">Tim Produksi</h2>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-4 mt-20">
      <div v-for="member in productionTeam" :key="member.title" class="text-center">
        <img :src="member.image" :alt="member.title" class="w-55 h-55 mx-auto rounded-lg" />
        <p class="mt-2 text-sm font-medium">{{ member.title }}</p>
      </div>
    </div>
  </section>
  <TitleItem title="Mitra Afiliasi" />
  <div class="">
    <div class="grid grid-cols-2 mt-12">
      <h2 class=" flex text-4xl pt-3 text-violet-500 font-medium w-[600px]">Kami Hadir Lebih Dekat Untuk Melayani Anda
        Dengan Layanan Terbaik</h2>
      <div>
        <p class="text-lg">Mitra Bisnis Kami Adalah Jaringan Pemasar Terpercaya yang Tersebar di Lebih dari <span
            class="font-bold">81 Kota di Seluruh Indonesia</span>, Menyediakan Layanan One Stop Stopping untuk Memenuhi
          Semua Kebutuhan Anda dengan Mudah dan Praktis</p>
        <button
          class="text-xl mt-7 bg-yellow-300 font-medium py-2 px-4 rounded-md shadow-md drop-shadow-md hover:bg-yellow-400">Selengkapnya</button>
      </div>
    </div>
        
  </div>
</template>

<style scoped>
section {
  text-align: center;
}
</style>
