<script setup lang="ts">
import {ref} from "vue";
import { Icon } from '@iconify/vue';

import GlitchEffect from "./GlitchEffect.vue"

defineProps({
  text: String,
  href: {
    type: String,
    default: '#'
  },
  size: {
    type: String,
    default: '1rem'
  }
})

const isActive = ref(false)

</script>

<template>
  <a class="flex flex-nowrap place-items-center no-underline" :style="{fontSize: size}"
     :href="href"
     @mouseenter="isActive = true"
     @mouseleave="isActive = false"
     :class="{hovering: isActive}"
  >

    <GlitchEffect :activated="isActive" :content="text" />
    <!--<span>{{ text }}</span>-->
    <span
        class="link-effect horizontal"
        :style="{marginLeft: `calc(${size} / 2)`}"
    >
      <Icon
          icon="mdi:arrow-right"
          :inline="true"
          :height="size"
      />
    </span>
  </a>
</template>

<style scoped lang="scss">

.hovering {
  cursor: pointer;
}

.link-effect {
  will-change: box-shadow, color;
  transition: color .3s ease-out, box-shadow 1s cubic-bezier(0.34, 1.56, 0.64, 1);

  &.horizontal {
    box-shadow: inset 0 0 0 0 #bbcde100;

    /* Dark mode */
    .dark & {
      box-shadow: inset 0 0 0 0 #05313e00;
    }

    .hovering & {
      box-shadow: inset 100px 0 0 0 #05313eff;
      color: white;

      /* Dark mode */
      .dark & {
        box-shadow: inset 100px 0 0 0 #bbcde1ff;
        color: black;
      }
    }
  }

}


</style>
