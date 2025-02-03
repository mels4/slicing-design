<script setup lang="ts">
import NavBar from '@components/NavBar.vue'
import FooterView from '@components/FooterView.vue'
import TitleItem from '@/components/TitleItem.vue';
import left from '@assets/images/left.svg';
import right from '@assets/images/right.svg';
import cyl1 from '@assets/images/sepeda1.svg';
import rating from '@assets/images/rating.svg';



interface card {
  name: string;
  description: string;
  image: string;
  price: string;
  href:string;
}

const listCard: card[] =[
  {
    name:'Sepeda Gunung',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/sepeda1.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Sepeda Balap',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/sepeda2.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Sepeda Kota',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/sepeda3.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Sepeda Lipat',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/sepeda4.svg',
    price:'Rp 200.000',
    href:'/'
  },
]

const listmotor: card[]=[
  {
    name:'Sepeda Gunung',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/motor1.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Sepeda Balap',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/motor2.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Sepeda Kota',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/motor3.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Sepeda Lipat',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/motor4.svg',
    price:'Rp 200.000',
    href:'/'
  }
]
const listmobil: card[]=[
  {
    name:'Hyundai',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/mobil1.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Toyota',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/mobil2.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Mitsubishi',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/mobil3.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Jeep',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/mobil4.svg',
    price:'Rp 200.000',
    href:'/'
  }
]
const listsuper: card[]=[
  {
    name:'Hyundai',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/supercars1.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Toyota',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/supercars2.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Mitsubishi',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/supercars3.svg',
    price:'Rp 200.000',
    href:'/'
  },
  {
    name:'Jeep',
    description:'Dirancang untuk medan berat atau jalanan yang kasar',
    image:'src/assets/images/supercars4.svg',
    price:'Rp 200.000',
    href:'/'
  }
]

</script>


<template>
  <NavBar />
  <main>
    <TitleItem title="Smart Otomotif" class=""/>

    <div class="flex mt-4 px-5 ml-10 ">
      <p class="font-medium text-2xl w-70 mt-20">Sepeda Gunung</p>
      <div class="flex justify-end w-full mt-20">
        <img :src="left" alt="" class="flex w-12 h-12 p-2 mr-5 rounded-xl bg-purple-800">
        <img :src="right" alt="" class="w-12 h-12 p-2 ml-10 mr-10 rounded-xl bg-purple-800">
      </div>
    </div>
    <p class="text-[17px] mx-5 mt-3 ml-14">Pilihan transportasi ramah lingkungan, hemat, dan menyehatkan. Temukan berbagai sepeda berkualitas di website kami untuk gaya hidup lebih aktif dan bebas.</p>
    <div class="flex relative ml-10">
      <router-link v-for="(item, index) in listCard" 
      :key="index" 
      :to="item.href">
      <div class=" w-77 h-88 mx-3 rounded-3xl bg-gradient-to-t from-purple-900 to-purple-700 mt-12 drop-shadow-xl">
          <img :src="item.image" alt="" class="w-full h-1/2 object-cover rounded-t-2xl">
            <div class="flex justify-between absolute mt-2 m-1 mx-1 left-2 right-3">
              <p class=" text-base text-white ">{{item.name}}</p>
              <p class=" text-base text-white flex justify-end">{{item.price}}</p>
            </div>
            <p class="text-[12px] font-light m-3 text-white mt-9 w-78">{{item.description}}</p>
            <img :src="rating" alt="" class="mt-3 ml-3  ">
            <button class="text-black ml-3 bg-yellow-300 px-2 py-1.5 mt-4 font-small text-l rounded-[0.5vw] drop-shadow-xl">Beli Sekarang</button>
          </div>
        </router-link>
    </div>
    <div class="flex mt-4 px-5 ml-10">
      <p class="font-medium text-2xl w-70 mt-20">Motor</p>
      <div class="flex justify-end w-full mt-20">
        <img :src="left" alt="" class="flex w-12 h-12 p-2 mr-5 rounded-xl bg-purple-800">
        <img :src="right" alt="" class="w-12 h-12 p-2 ml-10 mr-10 rounded-xl bg-purple-800">
      </div>
    </div>
    <p class="text-[17px] mx-5 mt-3 ml-14">Pilihan transportasi ramah lingkungan, hemat, dan menyehatkan. Temukan berbagai sepeda berkualitas di website kami untuk gaya hidup lebih aktif dan bebas.</p>
    <div class="flex relative ml-10">
      <router-link v-for="(item, index) in listmotor" 
      :key="index" 
      :to="item.href">
      <div class=" w-77 h-88 mx-3 rounded-3xl bg-gradient-to-t from-purple-900 to-purple-700 mt-12 drop-shadow-xl">
          <img :src="item.image" alt="" class="w-full h-1/2 object-cover rounded-t-2xl">
            <div class="flex justify-between absolute mt-2 m-1 left-2 right-2">
              <p class=" text-base text-white mr-22">{{item.name}}</p>
              <p class=" text-base text-white ">{{item.price}}</p>
            </div>
            <p class="text-[12px] font-light m-3 text-white mt-9 w-78">{{item.description}}</p>
            <img :src="rating" alt="" class="mt-3 ml-3  ">
            <button class="text-black ml-3 bg-yellow-300 px-2 py-1.5 mt-4 font-small text-l rounded-[0.5vw] drop-shadow-xl">Beli Sekarang</button>
          </div>
        </router-link>
    </div>
    <div class="flex mt-4 px-5 ml-10">
      <p class="font-medium text-2xl w-70 mt-20">Mobil</p>
      <div class="flex justify-end w-full mt-20">
        <img :src="left" alt="" class="flex w-12 h-12 p-2 mr-5 rounded-xl bg-purple-800">
        <img :src="right" alt="" class="w-12 h-12 p-2 ml-10 mr-10 rounded-xl bg-purple-800">
      </div>
    </div>
    <p class="text-[17px] mx-5 mt-3 ml-14">Pilihan transportasi ramah lingkungan, hemat, dan menyehatkan. Temukan berbagai sepeda berkualitas di website kami untuk gaya hidup lebih aktif dan bebas.</p>
    <div class="flex relative ml-10">
      <router-link v-for="(item, index) in listmobil" 
      :key="index" 
      :to="item.href">
      <div class=" w-77 h-88 mx-3 rounded-3xl bg-gradient-to-t from-purple-900 to-purple-700 mt-12 drop-shadow-xl">
          <img :src="item.image" alt="" class="w-full h-1/2 object-cover rounded-t-2xl">
            <div class="flex justify-between absolute mt-2 m-1 left-2 right-2">
              <p class=" text-base text-white mr-22">{{item.name}}</p>
              <p class=" text-base text-white ">{{item.price}}</p>
            </div>
            <p class="text-[12px] font-light m-3 text-white mt-9 w-78">{{item.description}}</p>
            <img :src="rating" alt="" class="mt-3 ml-3  ">
            <button class="text-black ml-3 bg-yellow-300 px-2 py-1.5 mt-4 font-small text-l rounded-[0.5vw] drop-shadow-xl">Beli Sekarang</button>
          </div>
        </router-link>
    </div>
    <div class="flex mt-4 px-5 ml-10">
      <p class="font-medium text-2xl w-70 mt-20">Supercars</p>
      <div class="flex justify-end w-full mt-20">
        <img :src="left" alt="" class="flex w-12 h-12 p-2 mr-5 rounded-xl bg-purple-800">
        <img :src="right" alt="" class="w-12 h-12 p-2 ml-10 mr-10 rounded-xl bg-purple-800">
      </div>
    </div>
    <p class="text-[17px] mx-5 mt-3 ml-14">Pilihan transportasi ramah lingkungan, hemat, dan menyehatkan. Temukan berbagai sepeda berkualitas di website kami untuk gaya hidup lebih aktif dan bebas.</p>
    <div class="flex relative ml-10">
      <router-link v-for="(item, index) in listsuper" 
      :key="index" 
      :to="item.href">
      <div class=" w-77 h-88 mx-3 rounded-3xl bg-gradient-to-t from-purple-900 to-purple-700 mt-12 drop-shadow-xl">
          <img :src="item.image" alt="" class="w-full h-1/2 object-cover rounded-t-2xl">
            <div class="flex justify-between absolute mt-2 m-1 left-2 right-2">
              <p class=" text-base text-white mr-22">{{item.name}}</p>
              <p class=" text-base text-white ">{{item.price}}</p>
            </div>
            <p class="text-[12px] font-light m-3 text-white mt-9 w-78">{{item.description}}</p>
            <img :src="rating" alt="" class="mt-3 ml-3  ">
            <button class="text-black ml-3 bg-yellow-300 px-2 py-1.5 mt-4 font-small text-l rounded-[0.5vw] drop-shadow-xl">Beli Sekarang</button>
          </div>
        </router-link>
    </div>
 
  </main>
  <FooterView />
</template>
