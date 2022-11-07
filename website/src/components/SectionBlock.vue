<script setup lang="ts">

defineProps({
  title: String,
  gapY: {
    type: String,
    default: "1.5rem"
  }
})

</script>

<template>
  <div>
    <div class="tracking-widest uppercase text-sm font-normal pb-6"> {{ title }}</div>

    <div class="flex flex-col" :style="{ rowGap: gapY }">
      <slot></slot>
    </div>

  </div>
</template>


<style scoped></style>
