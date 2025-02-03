<script setup lang="ts">
import TitleItem from '@components/TitleItem.vue'
import iprogram from '@assets/images/program.svg'
import sm from '@assets/images/smart_vakansi.svg'
import des from '@assets/images/des.svg'
import slngkp from '@assets/images/selengkapnya.svg'
import ssuper from '@assets/images/super.svg'
import pi_mall from '@assets/images/pi_mall.svg'
import otomotif from '@assets/images/otomotif.svg'
import property from '@assets/images/property.svg'
// import img1 from "@assets/images/Rectangle 19.png"
</script>

<template>
  <section class="w-full min-h-screen" id="program">
    <TitleItem title="Program kami" />
    <div class="top-8">
      <button class="mt-16 ml-15 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-950 to-purple-600">Smart Vakansi</button>
      <div class="flex ">
          <img :src="iprogram" alt="" class="px-8 mt-6">
          <div class="max-w-xl mx-auto pt-20 ">
            <p class="text-2xl text-justify mr-10">Program Smart Vakansi merupakan inisiatif inovatif yang memudahkan pemesanan perjalanan haji, umroh, dan liburan (Domestik dan Luar Negeri), dengan memanfaatkan teknologi untuk kenyamanan dan efisiensi yang disesuaikan dengan preferensi pengguna.</p>
            <p class="text-xl font-bold mt-2 pt-0.5">Didukung oleh lebih dari 20 Biro Haji, Umroh, dan Pariwisata</p>
            <button class="text-black bg-yellow-300 px-5 py-3 mt-4 font-medium text-2xl rounded-xl drop-shadow-xl">Selengkapnya</button>
          </div>
      </div>
    </div>
    <div class="top-8 ">
      <div class="flex justify-end w-full">
        <button class="mr-10 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-950 to-purple-600">
          Super PI Node Mining Center
        </button>
      </div>
      <div class="flex lg:flex-row items-center md:items-start mt-2 w-full">
        <div class="flex justify-end w-full">
          <div class="max-w-xl mx-auto pt-20">
            <p class="text-2xl text-justify ml-10">Sistem layanan yang terintegrasi di satu lokasi untuk meningkatkan efisiensi dan kemudahan akses bagi masyarakat. Dengan konsep terpusat, berbagai layanan dapat dikelola dan didistribusikan secara lebih efektif.. Kami menyediakan solusi mining Pi Network yang aman, efisien, dan terpercaya. Bergabunglah dengan kami sekarang!</p>
            <button class="text-black ml-10 bg-yellow-300 px-5 py-3 mt-4 font-medium text-2xl rounded-xl drop-shadow-xl">Selengkapnya</button>
          </div>
        </div>
        <div class="flex justify-start w-full">
          <img :src="ssuper" alt="" class="px-8 flex mt-6">
        </div>
      </div>
    </div>
    <div class="top-8">
      <button class="ml-10 mt-16 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-950 to-purple-600">SMART PROPERTY</button>
      <div class="flex ">
          <img :src="property" alt="" class="px-8 flex mt-6">
          <div class="max-w-xl mx-auto pt-10">
            <p class="text-2xl text-justify mr-10">Konsep Pembangunan Smart Home, yaitu Rumah Berbasis Digital. Saat ini kami mempersiapkan Proyek Perumahan Smart Digital, yang mana semua aktivitas dapat dikendalikan melalui Handphone, seperti : </p>
            <p class="text-2xl text-justify pt-3 mr-10">membuka tutup pintu, menyalakan peralatan elektronik, lampu-lampu, dan atau mematikannya, serta pengawasan cctv dari manapun, tanpa hambatan jarak</p>
            <img :src="slngkp" alt="" class="pt-5">
          </div>
      </div>
    </div>

    <div class="top-8 ">
      <div class="flex justify-end w-full">
        <button class="mr-10 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-950 to-purple-600">
          Smart Otomotif
        </button>
      </div>
      <div class="flex lg:flex-row items-center md:items-start mt-2 w-full">
        <div class="flex justify-end w-full">
          <div class="max-w-xl mx-auto pt-20">
            <p class="text-2xl text-justify ml-10">Program Layanan Pembelian Kendaraan Secara Online, melalui aplikasi yang telah di dukung oleh para Mitra Bisnis Protigamas, yang tersebar di lebih dari 40 Kota di seluruh Indonesia.</p>
            <button class="text-black bg-yellow-300 ml-10 px-5 py-3 mt-4 font-medium text-2xl rounded-xl drop-shadow-xl">Selengkapnya</button>
          </div>
        </div>
        <div class="flex justify-start w-full">
          <img :src="ssuper" alt="" class="px-8 flex mt-6">
        </div>
      </div>
    </div>
    <div class="top-8">
      <button class="ml-11 mt-16 px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-purple-950 to-purple-600">Smart PI-Mall</button>
      <div class="flex ">
          <img :src="pi_mall" alt="" class="px-8 flex mt-6">
          <div class="max-w-xl mx-auto pt-20">
            <p class="text-2xl text-justify mr-10">Proyek Pengembangan Bisnis Pemasaran ini mengintegrasikan pemasaran online melalui marketplace dan pemasaran offline, didukung oleh jaringan mitra bisnis Protigamas yang telah tersebar di hampir seluruh kota di Indonesia</p>
            <button class="text-black bg-yellow-300 px-5 py-3 mt-4 font-medium text-2xl rounded-xl drop-shadow-xl">Selengkapnya</button>
          </div>
      </div>
    </div>
  </section>
</template>
