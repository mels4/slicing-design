<script setup lang="ts">

defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <div class="flex gap-20 items-center">
    <h3 class="font-medium  text-2xl lg:text-4xl whitespace-nowrap">{{ title }}</h3>
    <div class="h-0.5 w-full rounded-full bg-slate-950"></div>
  </div>
</template>
