<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import logo from '@assets/images/logo.png'
import { useRoute, useRouter, type RouteLocationNormalized } from 'vue-router';

interface navItem {
  name: string,
  href: string
}
const listNavItem: navItem[] = [
  {
    name: "Beranda",
    href: "/"
  },
  {
    name: "Programs",
    href: "/#program"
  },
  {
    name: "Mitra",
    href: "/partner"
  },
  {
    name: "Tentang Kami",
    href: "/aboutUs"
  },
]

const isMenu = ref(false)
const isScrolled = ref(false)
const isScrollUp = ref(false)
const isScrollDown = ref(false)

const router = useRouter()
const route = useRoute()
const lastYScroll = ref(0)

const openMenu = () => {
  isMenu.value = !isMenu.value
}

const scrolling = () => {
  const current = window.scrollY
  isScrollUp.value = current < lastYScroll.value
  isScrollDown.value = current > lastYScroll.value
  isScrolled.value = current > 50
  lastYScroll.value = current
  if (isScrollDown.value) {
    isMenu.value = false
  }
}

const clickItem = (s: string) => {
  if (s.startsWith('/#')) {
    const id = s.substring(2)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    router.push(s)
  }
  isMenu.value = false
}

const itemActive = (route: RouteLocationNormalized, s: string): boolean => {
  if (s.startsWith('/#')) {
    const id = s.substring(2)
    const section = document.getElementById(id)
    if (section) {
      const r = section.getBoundingClientRect()
      return r.top <= 100 && r.bottom >= 100
    }
    return route.hash === s
  }
  if (s === '/') {
    return route.fullPath === '/'
  }

  return route.path === s || route.fullPath === s
}


onBeforeMount(() => {
  window.removeEventListener('scroll', scrolling)
})
onMounted(() => {
  window.addEventListener('scroll', scrolling)
})
</script>

<template>
  <header class="pt-7 pb-5 px-5 lg:px-20 sticky top-0 left-0 right-0 z-50"
    :class="{ 'opacity-0': isScrollDown && lastYScroll > 200, 'bg-white/45 backdrop-blur-xs shadow': isScrollUp && lastYScroll }">
    <nav class="flex justify-between items-center">
      <button @click="openMenu" class="lg:hidden w-10 flex flex-col gap-1" :class="{ 'menu-active': isMenu }">
        <span class="w-6 h-1 bg-violet-800 rounded-full transition duration-300 ease-in-out origin-top-left"></span>
        <span class="w-6 h-1 bg-violet-800 rounded-full transition duration-300 ease-in-out"></span>
        <span class="w-6 h-1 bg-violet-800 rounded-full transition duration-300 ease-in-out origin-bottom-left"></span>
      </button>
      <div class="flex flex-1 items-center justify-center gap-2 lg:gap-4">
        <img :src="logo" alt="logo" class="w-7 h-7">
        <h1 class="text-lg lg:text-4xl font-rochester">Protigamas</h1>
      </div>
      <ul class="hidden lg:flex bg-violet-500 w-fit  items-center rounded-full text-white p-2 h-12">
        <li v-for="(item, index) in listNavItem" :key="index">
          <router-link :to="item.href" @click="clickItem(item.href)" class="py-2 px-4"
            :class="{ 'bg-white rounded-full text-black': itemActive(route, item.href) }">{{ item.name }}
          </router-link>
        </li>
      </ul>
      <div class="lg:flex-1 flex justify-end">
        <button
          class="rounded-full bg-violet-500 text-white text-xs lg:text-xl px-3 lg:px-6 lg:py-2 h-7 lg:h-12">Masuk</button>
      </div>
    </nav>
  </header>
</template>

<style>
.menu-active>span:nth-child(1) {
  rotate: 45deg;
}

.menu-active>span:nth-child(2) {
  scale: 0;
}

.menu-active>span:last-child {
  rotate: -45deg;
}

/* .menu-active>span:nth-child(2) {
  @apply scale-0
}

.menu-active>span:last-child {
  @apply -rotate-45 w-6
} */
</style>
