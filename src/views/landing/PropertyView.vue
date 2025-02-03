<script setup lang="ts">
import NavBar from '@components/NavBar.vue'
import FooterView from '@components/FooterView.vue'
import TitleItem from '@components/TitleItem.vue'
import mantion from '@assets/images/mantion.png'
import kondominium from '@assets/images/kondominium.png'
import smarthome from '@assets/images/smarthome.png'
import smartvilla from '@assets/images/smartvilla.png'
</script>

<template>
  <NavBar />
  <main>
    <section class="min-h-screen mt-10 px-10 w-full justify-center">
      <TitleItem title="Smart Properti" />
      
      <div class="bg-purple-800 mt-15 p-10 rounded-lg shadow-lg text-center">
        <img :src="mantion" alt="Protigamas Mansion" class="w-full h-full">
        <h1 class="text-3xl mt-10 text-white">Protigamas Mansion</h1>
        <p class="text-2xl text-white mt-5 mx-auto max-w-9xl">
          Melayani pembangunan hunian mewah dengan desain elegan dan fasilitas lengkap, termasuk kamar tidur luas, ruang tamu modern, kolam renang, dan keamanan 24 jam. Terletak di lokasi strategis, mansion ini menawarkan kenyamanan dan nilai investasi jangka panjang. Hubungi kami untuk informasi lebih lanjut!
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-17 mt-15">
        <!-- Kondominium -->
        <div class="bg-gradient-to-b from-purple-700 to-purple-900 p-6 rounded-lg shadow-lg text-center text-white">
          <img :src="kondominium" alt="Kondominium" class="w-full h-70 rounded-lg">
          <h2 class="text-2xl mt-5">Kondominium</h2>
          <p class="mt-3 text-lg">
            Temukan kenyamanan dan kemewahan tinggal di kondominium kami, dengan fasilitas lengkap dan lokasi strategis yang memudahkan aktivitas sehari-hari Anda.
          </p>
        </div>

        <!-- Smart Home -->
        <div class="bg-gradient-to-b from-purple-700 to-purple-900 p-6 rounded-lg shadow-lg text-center text-white">
          <img :src="smarthome" alt="Smart Home" class="w-full h-70 rounded-lg">
          <h2 class="text-2xl mt-5">Smart Home</h2>
          <p class="mt-3 text-lg">
            Nikmati kenyamanan hidup modern dengan teknologi Smart Home kami, yang memberikan kemudahan kontrol segala perangkat hanya dengan sentuhan jari.
          </p>
        </div>

        <!-- Smart Villa -->
        <div class="bg-gradient-to-b from-purple-700 to-purple-900 p-6 rounded-lg shadow-lg text-center text-white">
          <img :src="smartvilla" alt="Smart Villa" class="w-full h-70 rounded-lg">
          <h2 class="text-2xl mt-5">Smart Villa</h2>
          <p class="mt-3 text-lg">
            Rasakan kemewahan dan kenyamanan tinggal di Smart Villa kami, dilengkapi teknologi canggih untuk mengontrol setiap aspek rumah Anda dengan mudah dan efisien.
          </p>
        </div>
      </div>
    </section>
  </main>
  <FooterView />
</template>