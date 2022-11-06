<script setup lang="ts">

defineProps<{
  title: string
}>()

</script>

<template>
  <div>
    <div class="tracking-widest uppercase text-sm font-normal pb-6"> {{ title }}</div>

    <div class="flex flex-col gap-y-6">
      <slot></slot>
    </div>

  </div>
</template>


<style scoped></style>
