<script setup lang="ts">
import NavBar from '@components/NavBar.vue'
import FooterView from '@components/FooterView.vue'
import TitleItem from '@components/TitleItem.vue'
import vector from '@assets/images/vector-lengkung.svg'
import vacation1 from '@assets/images/vac-1.svg'
import vacation2 from '@assets/images/vac-2.svg'
import vacation3 from '@assets/images/vac-3.svg'
import vacation4 from '@assets/images/vac-4.svg'

</script>


<template>
  <NavBar />
  <main>
    <TitleItem title="Smart Vakansi" />
    <!-- Wisata Religi -->
    <div class="relative w-[300px]">
      <img :src="vector" alt="" class="w-full h-auto pt-20">
      <div class="absolute inset-0 flex items-center justify-center pt-20">
          <h1 class=" text-white font-bold text-2xl">Wisata Religi</h1>
      </div>
    </div>
    <div class="grid grid-cols-2 items-center">
      <div class="pl-6 w-[1100px] text-justify text-2xl">
        <h1 class="mt-7">
          Kami menawarkan layanan perjalanan wisata religi yang disesuaikan dengan kebutuhan spiritual Anda, menuju berbagai destinasi suci dan penuh makna. Pilihan paket kami meliputi:
        </h1>
        <div class="my-7">
          <ul class="list-disc ml-15">
            <li>
              <p><span class=" font-bold">Islam (Umrah & Haji):</span> Pengalaman ibadah yang khusyuk dan penuh makna dengan layanan perjalanan umrah dan haji yang terorganisir dengan baik, memastikan kenyamanan dan kemudahan Anda dalam setiap langkah ibadah.</p>
            </li>
            <li>
              <p><span class=" font-bold">Kristen:</span> Perjalanan rohani ke tempat-tempat suci Kristen di seluruh dunia, seperti Yerusalem, Vatikan, dan lokasi bersejarah lainnya yang memperdalam iman dan kepercayaan Anda.</p>
            </li>
            <li>
              <p><span class=" font-bold">Hindu:</span> Wisata religi ke tempat-tempat suci Hindu, seperti Pura Besakih di Bali, dan berbagai destinasi spiritual yang akan membawa Anda lebih dekat dengan ajaran dan tradisi Hindu.</p>
            </li>
            <li>
              <p><span class=" font-bold">Buddha:</span> Perjalanan spiritual ke situs-situs Buddha yang bersejarah seperti India, Nepal, dan Thailand, memberikan kesempatan untuk refleksi diri dan kedamaian batin.</p>
            </li>
          </ul>
        </div>
        <h1>
          Dengan pelayanan yang ramah, profesional, dan terjamin keamanannya, kami berkomitmen untuk memberikan pengalaman wisata religi yang tak terlupakan, penuh kedamaian dan keberkahan.
        </h1>
      </div>

      <!-- Bagian Gambar -->
      <div class="flex justify-end">
        <img :src="vacation1" alt="" class="w-full max-w-[350px] h-auto object-contain">
      </div>
    </div>
    <!--  -->
    <!-- Wisata Domestik -->
    <div class="relative w-[300px]">
      <img :src="vector" alt="" class="w-full h-auto pt-20">
      <div class="absolute inset-0 flex items-center justify-center pt-20">
          <h1 class=" text-white font-bold text-2xl">Wisata Domestik</h1>
      </div>
    </div>
    <div class="grid grid-cols-2 items-center">
      <div class="pl-6 w-[1100px] text-justify text-2xl">
        <h1 class="mt-7">
          Kami menyediakan layanan perjalanan wisata ke berbagai destinasi eksotis di Indonesia, termasuk:
        </h1>
        <div class="my-7">
          <ul class="list-disc ml-15">
            <li>
              <p><span class=" font-bold">Bali:</span> Keindahan pantai, budaya, dan alam yang memukau.</p>
            </li>
            <li>
              <p><span class=" font-bold">Lombok:</span> Alam yang menawan, dari pantai hingga Gunung Rinjani.</p>
            </li>
            <li>
              <p><span class=" font-bold">Mentawai:</span> Surga bagi peselancar dan pencinta alam.</p>
            </li>
          </ul>
        </div>
        <h1>
          Dan masih banyak lagi destinasi menarik lainnya. Nikmati liburan yang tak terlupakan dengan pelayanan terbaik dari kami.
        </h1>
      </div>

      <!-- Bagian Gambar -->
      <div class="flex justify-end">
        <img :src="vacation2" alt="" class="w-full max-w-[350px] h-auto object-contain">
      </div>
    </div>
    <!--  -->
    <!-- Wisata Internasional -->
    <div class="relative w-[300px]">
      <img :src="vector" alt="" class="w-full h-auto pt-20">
      <div class="absolute inset-0 flex items-center justify-center pt-20">
          <h1 class=" text-white font-bold text-2xl">Wisata Internasional</h1>
      </div>
    </div>
    <div class="grid grid-cols-2 items-center">
      <div class="pl-6 w-[1100px] text-justify text-2xl">
        <h1 class="mt-7">
          Kami menyediakan layanan perjalanan wisata ke berbagai destinasi luar negeri, termasuk:
        </h1>
        <div class="my-7">
          <ul class="list-disc ml-15">
            <li>
              <p><span class=" font-bold">Eropa:</span> Menjelajahi kota ikonik dan keajaiban alam.</p>
            </li>
            <li>
              <p><span class=" font-bold">Asia:</span> Mengungkap budaya dan keindahan alam Jepang, Thailand, India, dan Nepal.</p>
            </li>
            <li>
              <p><span class=" font-bold">Australia & Selandia Baru:</span> Petualangan seru dan keindahan alam yang memukau.</p>
            </li>
            <li>
              <p><span class=" font-bold">Amerika</span> Destinasi populer seperti New York, Los Angeles, dan Meksiko.</p>
            </li>
          </ul>
        </div>
        <h1>
          Dengan layanan profesional, kami siap membantu Anda merencanakan liburan luar negeri yang tak terlupakan.
        </h1>
      </div>

      <!-- Bagian Gambar -->
      <div class="flex justify-end">
        <img :src="vacation3" alt="" class="w-full max-w-[350px] h-auto object-contain">
      </div>
    </div>
    <!--  -->
    <!-- Tour & Travel -->
    <div class="relative w-[300px]">
      <img :src="vector" alt="" class="w-full h-auto pt-20">
      <div class="absolute inset-0 flex items-center justify-center pt-20">
          <h1 class=" text-white font-bold text-2xl">Tour and Travel</h1>
      </div>
    </div>
    <div class="grid grid-cols-2 items-center">
      <div class="pl-6 w-[1100px] text-justify text-2xl">
        <h1 class="">
          Kami menawarkan layanan Tour & Travel lengkap untuk perjalanan wisata di dalam dan luar negeri, serta paket Umrah dan Haji. Nikmati perjalanan tak terlupakan ke destinasi eksotis di Indonesia, Eropa, Asia, Australia, Amerika, dan banyak lagi, dengan pelayanan terbaik dan harga yang kompetitif. Kami siap membantu Anda merencanakan liburan impian dengan kenyamanan dan profesionalisme.
        </h1>
      </div>

      <!-- Bagian Gambar -->
      <div class="flex justify-end items-center">
        <img :src="vacation4" alt="" class="w-full max-w-[350px] h-auto object-contain">
      </div>
    </div>
    <!--  -->
  </main>
  <FooterView />
</template>
