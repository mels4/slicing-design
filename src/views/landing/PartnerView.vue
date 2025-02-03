<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import TitleItem from '@components/TitleItem.vue'
import mitra1 from '@assets/images/mitra-1.svg'
import mitra2 from '@assets/images/mitra-2.svg'

</script>


<template>
  <NavBar />
  <main class="min-h-screen">
    <TitleItem title="Daftar Perusahaan Mitra Afiliasi" />
    <img :src="mitra1" alt="" class="w-full h-auto object-contain mt-7">
    <img :src="mitra2" alt="" class="w-full h-auto object-contain">
  </main>
  <FooterView />
</template>
