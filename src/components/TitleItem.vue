<script setup lang="ts">

defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>

<template>
  <div class="flex gap-20 items-center ml-15">
    <h3 class="font-medium text-4xl w-84">{{ title }}</h3>
    <div class="h-0.5 w-full rounded-full bg-slate-950 "></div>
  </div>
</template>
