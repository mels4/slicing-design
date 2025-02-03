<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import TitleItem from '@components/TitleItem.vue';
import legal from '@assets/legalitas.png'

interface ethics {
  title: string,
  subtitle: string
}

const listEthics: ethics[] = [
  { title: 'Integritas', subtitle: 'Bertindak sesuai ucapan, janji, sehingga dapat menumbuhkan kepercayaan pihak lain' },
  { title: 'Komitmen', subtitle: 'Melaksanakan pekerjaan dengan sepenuh hati untuk mencapai hasil terbaik' },
  { title: 'Inovasi', subtitle: 'Memunculkan gagasan baru untuk meningkatkan produktivitas dan pertumbuhan perusahaan ' },
  { title: 'Sikap Positif', subtitle: 'Berperilaku baik agar tercipta lingkungan kerja yang saling menghargai dan kondusif' },
  { title: 'Perbaikan yang berkelanjutan', subtitle: 'Meningkatkan kemampuan atau kapasitas diri, unit kerja, dan organisasi secara terus menerus untuk mendapatkan hasil terbaik' },
  { title: 'Loyalitas', subtitle: 'Membudayakan semangat untuk mengerti, memahami dan melaksanakan nilai-nilai luhur Protigamas' },
]

const listLegal: ethics[] = [
  { title: 'NIB', subtitle: '1010240062834' },
  { title: 'TDP SE', subtitle: '101024006283400000001' },
  { title: 'Alamat', subtitle: 'Ruko Tondonegoro Square B4, Pati Wetan - Pati 59115' },
  { title: 'Phone', subtitle: '+62 8815916464' },
  { title: 'Email', subtitle: 'Support@protigamas.com' },
]
</script>

<template>
  <NavBar />
  <main class="min-h-screen px-4 lg:px-[70px] py-5 lg:py-20">
    <TitleItem title="About Us" />
    <section class="flex flex-col lg:items-end gap-4">
      <h4 class="font-medium text-xl lg:text-3xl mt-10 lg:mt-12">Visi dan Misi Protigamas Group</h4>
      <div class="flex flex-row-reverse lg:flex-row gap-10 items-center">
        <div class="flex flex-col gap-4">
          <h5 class="font-semibold text-lg lg:text-xl">Visi Protigamas</h5>
          <p class="text-justify">Teraihnya kesejahteraan para masyarakat Pioneer khususnya dan masyarakat luas
            disekitarnya serta
            berkontribusi aktif dalam pertumbuhan ekonomi kerakyatan diseluruh Nusantara melalui pengelolaan asset
            crypto
            pinetwork yang optimal.</p>
        </div>
        <div class="w-8 hidden md:block md:h-24 lg:h-16 lg:w-full bg-violet-500"></div>
      </div>
      <div class="flex lg:flex-row-reverse gap-10 items-center">
        <div class=" flex flex-col gap-4">
          <h5 class="font-semibold text-lg lg:text-xl">Misi Protigamas</h5>
          <p class="text-justify">Sebagai fasilitator dan developer terhadap kebutuhan masyarakat Pioneer dalam
            memanfaatkan asset crypto pi network sebagai asset yang liquid dan sangat bernilai. Memberikan edukasi dan
            kesempatan berusaha yang luas kepada masyarakat Pioneer khususnya yang terintegrasi dalam jaringan usaha
            Protigamas Group. </p>
        </div>
        <div class="w-10 hidden md:block md:h-28 lg:h-16 lg:w-full bg-violet-500"></div>
      </div>
    </section>
    <section class="mt-11">
      <h5 class="font-medium text-xl lg:text-3x pb-9">Etika Protigamas Group</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-9">
        <div v-for="(item, index) in listEthics" :key="index">
          <div class="rounded-2xl border-2 border-violet-500 p-4 h-full">
            <h5 class="overflow-hidden text-ellipsis font-semibold text-base lg:text-xl">{{ item.title }}</h5>
            <p class="text-sm lg:text-lg">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-16 flex flex-row gap-5">
      <div class="flex flex-[3] flex-col">
        <h5 class="font-medium text-xl lg:text-3x pb-9">Legalitas</h5>
        <table class="table-auto">
          <tbody class="align-top">
            <tr v-for="(item, index) in listLegal" :key="index">
              <td class="lg:py-2">{{ item.title }}</td>
              <td class="lg:py-2 px-3">:</td>
              <td class="lg:py-2 text-justify">{{ item.subtitle }}</td>
            </tr>
          </tbody>
        </table>
        <!-- <ul v-for="(item, index) in listLegal" :key="index">
          <li class="grid grid-flow-col">
            <span class="col-span-2">{{ item.title }}</span>
            <span>:</span>
            <span>{{ item.subtitle
              }}</span>
          </li>
        </ul> -->
      </div>
      <img :src="legal" alt="" class="flex-[2] md:w-1/3 w-full hidden md:block rounded-3xl lg:h-80 object-cover">
    </section>

  </main>
  <FooterView />
</template>
