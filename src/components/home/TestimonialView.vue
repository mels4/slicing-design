<script setup lang="ts">
import TitleItem from '../TitleItem.vue';
import cwo from '@assets/images/bagus.svg';
import cwe from '@assets/images/vina.svg';
import left from '@assets/images/left.svg';
import right from '@assets/images/right.svg';
import footer from '@assets/images/footer.svg';
import ig from '@assets/images/ig.svg';
import gmail from '@assets/images/gmail.svg';
import wa from '@assets/images/wa.svg';
import twit from '@assets/images/twit.svg';

interface NavItem {
  name: string;
  description: string;
  image: string;
  href: string;
}

const listNavItem: NavItem[] = [
  {
    name: "Vina Saraswati",
    description: "Sangat praktis! Semua kebutuhan keluarga saya ada di sini, dan pengirimannya cepat.",
    image: "src/assets/images/vina.svg",
    href: "/"
  },
  {
    name: "Bagus",
    description: "Websitenya mudah digunakan, saya bisa belanja sambil bekerja tanpa repot",
    image: "src/assets/images/bagus.svg",
    href: "/#program"
  },
  {
    name: "Farhan Adi",
    description: "Saya suka belanja di Protigamas karena koleksi produknya lengkap dan harga bersaing",
    image: "src/assets/images/bagus.svg",
    href: "/partner"
  },
  {
    name: "Tina",
    description: "Belanja  menyenangkan, Semua barang datang tepat waktu sesuai harapan",
    image: "src/assets/images/vina.svg",
    href: "/aboutUs"
  },
  {
    name: "Adi",
    description: "Puas dengan pelayanan dan proses pemesanan yang cepat. Belanja jadi lebih mudah",
    image: "src/assets/images/bagus.svg",
    href: "/aboutUs"
  },
];
</script>

<template>
  <section class="w-full min-h-screen bg-gray-100" id="testi">
    <div class=""></div>
    <div class="flex">
      <h1 class="text-4xl font-medium mt-20 ml-4">Testimoni</h1>
      <div class="flex justify-end w-full mt-20">
        <img :src="left" alt="" class="flex w-12 h-12 p-2 mr-5 rounded-xl bg-purple-800">
        <img :src="right" alt="" class="w-12 h-12 p-2 ml-10 mr-10 rounded-xl bg-purple-800">
      </div>
    </div>
    <div class="flex ">
      <router-link v-for="(item, index) in listNavItem" 
      :key="index" 
      :to="item.href">
        <div class="w-70 h-60 mx-3 rounded-xl bg-white mt-20 drop-shadow-xl">
          <div class="container">
            <div class="flex p-4 ">
              <img :src="item.image" alt="" srcset="" class="w-14 h-14">
              <p class="font-medium text-xl m-4">{{ item.name }}</p>
            </div>
            <p class="m-4 text-l text-justify mt-0.5">{{ item.description }}</p>
          </div>
        </div>
      </router-link>
    </div>


    <div class="flex place-content-center mt-10 mb-4">
      <p class="text-2xl m-4 place-content-center">Telah menjadi mitra kami</p>
      <div class="flex flex-col m-4">
        <p class="text-6xl text-medium">50+</p>
        <p class="text-3xl text-slate-400 text-center">Kota</p>
      </div>
      <p class="text-2xl m-4 place-content-center">di seluruh Indonesia</p>
    </div>

    <div class="flex relative ">
    <img :src="footer" alt="" class="w-full">
      <div class="flex absolute ml-18 mt-7 flex-col">
          <p class="text-xl text-white mb-4 p-2">Hubungi Kami</p>
          <div class="flex ">
              <img :src="ig" alt="" class="p-2 rounded-xl border-3 border-white mx-2 hover:bg-purple-500">
              <img :src="gmail" alt="" class="p-2 rounded-xl border-3 border-white mx-2 hover:bg-purple-500">
              <img :src="wa" alt="" class="p-2 rounded-xl border-3 border-white mx-2 hover:bg-purple-500">
              <img :src="twit" alt="" class="p-2 rounded-xl border-3 border-white mx-2 hover:bg-purple-500">
          </div>
          <p class="text-xl text-white p-2 mt-3">Alamat Kantor</p>
          <p class="text-lg text-white mb-7 p-2 w-90 font-light">Ruko Tondonegoro Square B4, Pati Wetan 59115 , Pati, Jawa Tengah, Indonesia</p>
        </div> 
        <div class="flex absolute mt-7 flex-col place-content-center mx-118 text-justify">
          <p class="text-xl text-white mb-1.5 p-1">Tentang Kami</p>
          <p class="text-base w-110 text-white mt-1 p-1 font-light">PT Protigamas merupakan perusahaan teknologi yang mengembangkan marketplace inovatif untuk produk dan layanan terintegrasi, seperti properti, kendaraan, dan pariwisata.</p>
          <p class="text-base w-110 text-white mt-4 p-1 font-light">Kami mengundang Anda untuk berinvestasi di platform kami dengan potensi pengembalian tinggi melalui pertumbuhan eksponensial, teknologi modern, dan strategi bisnis yang matang.</p>
        </div> 
        <div class="flex absolute mt-7 flex-col mx-249 text-justify">
          <p class="text-xl text-white mb-1.5 p-1 w-80">Layanan Pelanggan</p>
          <div class="flex flex-col p-1">
            <p class="text-base text-white my-1.5 font-light">Hubungi Kami</p>
            <p class="text-base text-white my-1.5 font-light">FAQ (Pertanyaan yang Sering Diajukan)</p>
            <p class="text-base text-white my-1.5 font-light">Kebijakan Pengembalian Barang</p>
            <p class="text-base text-white my-1.5 font-light">Kebijakan Pengiriman</p>
            <p class="text-base text-white my-1.5 font-light">Syarat & Ketentuan</p>
            <p class="text-base text-white my-1.5 font-light">Privasi & Keamanan</p>
          </div>
        </div>
    </div>
    <div class="flex w-full bg-white">
      <div class="bg-white ml-214 text-medium text-l w-full p-2 text-gray-800">Copyright © 2025 Protigamas. All Rights Reserved.</div>
    </div>
    
  </section>
</template>
