<script setup lang="ts">

import Entry from './components/Entry.vue'
import FancyLink from './components/FancyLink.vue'
import SectionBlock from "./components/SectionBlock.vue";

</script>

<template>
  <!--  Create the a narrow container -->
  <div class="
    flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8
    font-sans antialiased tracking-wider
  ">
    <div class="w-full max-w-md">

      <!-- Different blocks -->
      <div class="flex flex-col gap-y-12">

        <div>

          <img class="inline-block h-12 w-12 rounded-full ring-2 dark:ring-white ring-black"
               src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
               alt=""/>

          <h1 class="my-3 text-2xl font-semibold">Grayson Wen</h1>
          <div class="flex flex-nowrap gap-4">
            <FancyLink text="GitHub" size=".9rem"/>
            <FancyLink text="LinkedIn" size=".9rem"/>
          </div>

        </div>

        <hr>

        <SectionBlock title="Currently">
          <Entry title="Project 1" description="Some description of the project"></Entry>
          <Entry title="Project 2" description="Some description of the project"></Entry>
        </SectionBlock>

        <hr>

        <SectionBlock title="Projects">
          <Entry title="Project 1" description="Some description of the project"></Entry>
          <Entry title="Project 2" description="Some description of the project"></Entry>
          <Entry title="Project 2" description="Some description of the project"></Entry>
        </SectionBlock>


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
