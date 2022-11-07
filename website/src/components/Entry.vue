<script setup lang="ts">
import FancyLink from "./FancyLink.vue";

defineProps<{
  title: string
}>()

</script>

<template>

  <div class="">
    <FancyLink :text="title" size="1.2rem" class="font-semibold"/>
    <p class="mt-2 tracking-normal font-thin truncate text-ellipsis overflow-hidden">
      <slot></slot>
    </p>
  </div>


</template>

<style scoped>
</style>
