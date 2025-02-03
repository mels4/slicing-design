<script setup lang="ts">
import NavBar from '@components/NavBar.vue'
import FooterView from '@components/FooterView.vue'
import logo from '@assets/logo.svg'

interface product {
  "name": string,
  "image": string
}

const lProduct: product[] = [
  { name: "emas Antam", image: logo },
  { name: "emas Antam", image: logo },
  { name: "emas Antam", image: logo },
  { name: "emas Antam", image: logo },
  { name: "emas Antam", image: logo },
]
</script>


<template>
  <NavBar />
  <main>
    <div class="flex flex-row bg-red-50 w-20 h-15">
      <ul v-for="(item, index) in lProduct" :key="index">
        <img :src="item.image">
        <p>{{ item.name }}</p>
      </ul>
    </div>
  </main>
  <FooterView />
</template>
