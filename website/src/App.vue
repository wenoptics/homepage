<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!--  Create the a narrow container -->
  <div class="
    flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8
    font-sans antialiased tracking-wider
  ">
    <div class="w-full max-w-md">

      <!-- Different blocks -->
      <div class="flex flex-col divide-y gap-y-12">

        <div>

          <img class="inline-block h-12 w-12 rounded-full ring-2 dark:ring-white ring-black"
               src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
               alt=""/>

          <h1 class="text-xl font-semibold">Grayson Wen</h1>

        </div>

        <div>
          <div class="section-title uppercase text-sm font-normal">Currently</div>

          <div class="section-item">
            <div class=""></div>
          </div>

        </div>

        <div>2</div>

      </div>


    </div>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
