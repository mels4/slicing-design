<script setup lang="ts">
import bg from '@assets/images/bg-hero.svg'
</script>

<template>
  <section class="lg:[height:calc(100vh-120px)]">
    <div class="relative">
      <div class="left-20 right-20 absolute -z-30">
        <img :src="bg" alt="" class=" w-full">
      </div>

      <div class="flex px-32">
        <div class="flex">
          <div class="flex flex-col">
            <h2 class="text-3xl">
              Protigamas merupakan Holding Company yang mengembangkan beberapa proyek
            </h2>
          </div>
          <!-- <img :src="bg" alt="" class=""> -->

        </div>
      </div>
    </div>

  </section>
</template>
