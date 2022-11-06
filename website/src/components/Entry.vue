<script setup lang="ts">
import FancyLink from "./FancyLink.vue";

defineProps<{
  title: string
  description: string
}>()

</script>

<template>

  <div class="">
    <FancyLink :text="title" size="1.2rem" class="font-semibold"/>
    <div class="tracking-normal">
      {{ description }}
    </div>
  </div>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
