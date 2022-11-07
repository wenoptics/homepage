<script setup lang="ts">
import FancyLink from "./FancyLink.vue";

defineProps<{
  title: string
}>()

</script>

<template>

  <div class="">
    <FancyLink :text="title" size="1.2rem" class="font-semibold"/>
    <div class="tracking-normal">
      <slot></slot>
    </div>
  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
