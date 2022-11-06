<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps({
  text: String,
  size: {
    type: String,
    default: '1rem'
  }
})
</script>

<template>
  <div class="flex flex-nowrap place-items-center" :style="{fontSize: size}">
    <span>{{ text }}</span>
    <Icon
        :style="{marginLeft: `calc(${size} / 2)`}"
        icon="mdi:arrow-right"
        :inline="true"
        :height="size"
    ></Icon>
  </div>
</template>
