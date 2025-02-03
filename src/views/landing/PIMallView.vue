<script setup lang="ts">
import NavBar from '@components/NavBar.vue'
import FooterView from '@components/FooterView.vue'
import TitleItem from '@/components/TitleItem.vue';
import img from '@assets/images/pi1.svg'

interface mall {
  name: string;
  image: string;
  href:string;
}
const listmall: mall[]=[
  {
    name:'Emas Antam',
    image:'src/assets/images/pi1.svg',
    href:'/'
  },
  {
    name:'Perhiasan',
    image:'src/assets/images/pi2.svg',
    href:'/'
  },
  {
    name:'Hp & Aksesoris',
    image:'src/assets/images/pi3.svg',
    href:'/'
  },
]
const listmall2: mall[]=[
  {
    name:'Fashion',
    image:'src/assets/images/pi4.svg',
    href:'/'
  },
  {
    name:'Produk UMKM',
    image:'src/assets/images/pi5.svg',
    href:'/'
  },
  {
    name:'Laptop',
    image:'src/assets/images/pi6.svg',
    href:'/'
  },
]
const listmal: mall[]=[
  {
    name:'Mesin-mesin',
    image:'src/assets/images/pi7.svg',
    href:'/'
  },
 
]


</script>


<template>
  <NavBar/>
  <main>
    <TitleItem title="Smart PI Mall"/>
    <div class="flex">
      <p class="ml-15 my-5 w-290">Bertajuk "Palugada", Smart PI Mall hadir sebagai destinasi belanja serba ada dengan menawarkan berbagai jenis produk berkualitas dari beragam kategori. Mulai dari elektronik terkini, fashion trendi, aksesoris stylish, hingga emas Antam dan perhiasan mewah. Kami juga menyediakan mesin-mesin industri, serta produk unggulan dari UMKM yang mendukung perekonomian lokal. Dengan pilihan lengkap dan harga bersaing, Smart PI Mall menjadi tempat yang tepat untuk memenuhi segala kebutuhan Anda, kapan saja dan di mana saja.</p>
    </div>
    <div class="flex relative ml-12 mt-5">
        <router-link v-for="(item, index) in listmall" 
        :key="index" 
        :to="item.href">
        <div class=" w-94 h-88 mx-3 rounded-3xl">
            <img :src="item.image" alt="" >
            <div class="flex place-content-center">
              <button class="mt-6 w-auto px-5 py-3 text-white text-xl font-normal rounded-lg bg-gradient-to-r from-purple-900 to-purple-500">{{item.name}}</button>
            </div>
            </div>
          </router-link>
    </div>
    <div class="flex relative ml-14">
        <router-link v-for="(item, index) in listmall2" 
        :key="index" 
        :to="item.href">
        <div class=" w-94 h-88 mx-3 rounded-3xl">
            <img :src="item.image" alt="" >
            <div class="flex place-content-center">
              <button class="mt-6 w-auto px-5 py-3 text-white text-xl font-normal rounded-lg bg-gradient-to-r from-purple-900 to-purple-500">{{item.name}}</button>
            </div>
            </div>
          </router-link>
    </div>
    <div class="flex relative ml-14">
        <router-link v-for="(item, index) in listmal" 
        :key="index" 
        :to="item.href">
        <div class=" w-94 h-88 mx-3 rounded-3xl">
            <img :src="item.image" alt="" >
            <div class="flex place-content-center">
              <button class="mt-6 w-auto px-5  py-3 text-white text-xl font-normal rounded-lg bg-gradient-to-r from-purple-900 to-purple-500">{{item.name}}</button>
            </div>
            </div>
          </router-link>
    </div>
  </main>
  <FooterView/>
</template>
