<script setup lang="ts">

import Entry from './components/Entry.vue'
import FancyLink from './components/FancyLink.vue'
import SectionBlock from "./components/SectionBlock.vue";
import Separator from "./Separator.vue";</script>

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
          <img class="inline-block h-16 w-16 rounded-full ring-2 dark:ring-amber-100 ring-black"
               src="https://avatars.githubusercontent.com/u/9987429?v=4"
               alt=""/>

          <h1 class="my-3 text-2xl font-semibold">Grayson Wen</h1>
          <div class="flex flex-nowrap gap-4">
            <FancyLink text="GitHub" size=".9rem"/>
            <FancyLink text="LinkedIn" size=".9rem"/>
          </div>
        </div>

        <Separator/>

        <SectionBlock title="Currently">
          <Entry title="Project 1">
            Some description of the project
          </Entry>
          <Entry title="Project 2">
            Some description of the project
          </Entry>
        </SectionBlock>

        <Separator/>

        <SectionBlock title="Projects">
          <Entry title="Project 1">
            Some description of the project
          </Entry>
          <Entry title="Project 2">
            Some description of the project
          </Entry>
          <Entry title="Project 2">
            Some description of the project
          </Entry>
        </SectionBlock>

        <Separator/>

        <SectionBlock title="My Open-Source" gap-y=".5rem">
          <FancyLink text="LinkedIn" size="1rem" class="font-light" />
          <FancyLink text="LinkedIn" size="1rem" class="font-light" />
          <FancyLink text="LinkedIn" size="1rem" class="font-light" />
        </SectionBlock>


      </div>


    </div>
  </div>

</template>

