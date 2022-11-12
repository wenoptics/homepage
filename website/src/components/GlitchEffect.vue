<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: ""
  },
  activated: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div :content="content" :class="{activated: activated}">
    {{ content }}
  </div>
</template>

<style scoped lang="scss">

@keyframes glitch{
  2%,64%{
    transform: translate(1px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-1px) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg);
  }
}

@keyframes glitchTop{
  2%,64%{
    transform: translate(2px,-2px);
    color: fuchsia;
  }
  4%,60%{
    transform: translate(-2px,2px);
    color: unset;
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg);
    color: unset;
  }
}

@keyframes glitchBottom{
  2%,64%{
    transform: translate(-2px,0);
    color: unset;
  }
  4%,60%{
    transform: translate(-2px,0);
    color: unset;
  }
  62%{
    transform: translate(-22px,5px) skew(21deg);
    color: aqua;
  }
}

div.activated {

  animation: glitch 5s steps(100) infinite;

  &:before,
  &:after{
    content: attr(content);
    position: absolute;
    left: 0;
  }

  &:before{
    animation: glitchTop 2s steps(100) infinite;
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 30%);
  }

  &:after{
    animation: glitchBottom 1.75s steps(100) infinite;
    clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0 100%);
  }

}

</style>
