<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import HeroHomeView from '@components/home/HeroView.vue'
import ProgramView from '@components/home/ProgramView.vue'
import OrganizationView from '@/components/home/OrganizationView.vue';
import PartneView from '@/components/home/PartneView.vue';
import AdvView from '@/components/home/AdvView.vue';
import FooterView from '@/components/FooterView.vue';
import TestimonialView from '@/components/home/TestimonialView.vue';
</script>

<template>
  <NavBar />
  <main>
    <HeroHomeView />
    <section class="px-[70px]">
      <ProgramView />
      <OrganizationView />
      <PartneView />
    </section>
    <AdvView />
    <TestimonialView />
  </main>
  <FooterView />
</template>
