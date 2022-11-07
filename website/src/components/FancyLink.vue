<script setup lang="ts">
import {ref} from "vue";
import { Icon } from '@iconify/vue';

defineProps({
  text: String,
  size: {
    type: String,
    default: '1rem'
  }
})

const isActive = ref(false)

</script>

<template>
  <div class="flex flex-nowrap place-items-center" :style="{fontSize: size}"
       @mouseenter="isActive = true"
       @mouseleave="isActive = false"
       :class="{hovering: isActive}"
  >
    <span>{{ text }}</span>
    <span
        class="link-effect"
        :style="{marginLeft: `calc(${size} / 2)`}"
    >
      <Icon
          icon="mdi:arrow-right"
          :inline="true"
          :height="size"
      />
    </span>
  </div>
</template>

<style scoped lang="scss">

.hovering {
  cursor: pointer;
}

.link-effect {
  will-change: box-shadow, color;
  margin: 0 -.25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

  box-shadow: inset 0 0 0 0 #bbcde100;
}
.hovering .link-effect {
  box-shadow: inset 100px 0 0 0 #05313eff;
  color: white;
}

/* Dark mode */

.dark {
  .link-effect {
    box-shadow: inset 0 0 0 0 #05313e00;
  }
  .hovering .link-effect {
    box-shadow: inset 100px 0 0 0 #bbcde1ff;
    color: black;
  }
}
</style>
