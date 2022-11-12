<script setup lang="ts">
import {ref} from "vue";
import {Icon} from '@iconify/vue';

import Entry from './components/Entry.vue'
import FancyLink from './components/FancyLink.vue'
import SectionBlock from "./components/SectionBlock.vue";
import Separator from "./Separator.vue";
import GlitchEffect from "./components/GlitchEffect.vue";

const linkGithub = ref("https://github.com/wenoptics")
const linkLinkedIn = ref("https://www.linkedin.com/in/graysonwen/")
const urlAvatar = ref("https://avatars.githubusercontent.com/u/9987429?v=4")
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

        <!-- TOP section-->
        <div class="flex flex-col gap-y-3">
          <img class="inline-block h-16 w-16 rounded-full ring-2 dark:ring-amber-100 ring-black"
               :src="urlAvatar"
               alt="My avatar"/>

          <h1 class="text-2xl font-semibold">Grayson Wen</h1>

          <h2 class="text-lg font-thin">
            Tech enthusiast. Find me on
            <a class="opacity-50" :href="linkGithub">
              <Icon class="inline mr-1.5" icon="mdi:github" />
              <span class="font-serif tracking-wider">@wenoptics</span>
            </a>
          </h2>
          <div class="flex flex-nowrap gap-4">
            <FancyLink size=".9rem" text="GitHub" :href="linkGithub" />
            <FancyLink size=".9rem" text="LinkedIn" :href="linkLinkedIn" />
          </div>
        </div>

        <Separator/>

        <!--<SectionBlock title="Currently">-->
        <!--  <Entry title="Project 1">-->
        <!--    Some description of the project-->
        <!--  </Entry>-->
        <!--  <Entry title="Project 2">-->
        <!--    Some description of the project-->
        <!--  </Entry>-->
        <!--</SectionBlock>-->

        <!--<Separator/>-->

        <SectionBlock title="Projects">
          <Entry title="Wipe clean" href="https://github.com/wenoptics/python-wipe-clean">
            A terminal tool to help clear your terminal in a fun way
          </Entry>
          <Entry title="Make a dump lamp smart" href="https://github.com/wenoptics/dumb-lamp-diy-esp32">
            Converting a cheap LED lamp to a smart lamp with ESP32
          </Entry>
          <Entry title="Auto Citrix connect">
            Just some hacks to help fix some crappy technology
          </Entry>
          <Entry title="Project Keypad Watch" href="https://wenoptics.github.io/kpw-webpage/">
            A wearable only for geeks
          </Entry>
          <Entry title="Rubik's Cube Robot" href="https://github.com/wenoptics/ubuntu-desktop-novnc">
            My take on a fully working Rubik's Cube solving machine
          </Entry>
          <Entry title="Ubuntu desktop with noVNC" href="https://github.com/wenoptics/Rubiks-Cube-Robot">
            VNC access and filesystem management from your browser
          </Entry>
        </SectionBlock>

        <Separator/>

        <SectionBlock title="My Open-Source" gap-y=".5rem">
          <FancyLink
              size="1rem" class="font-light"
              text="CNC polarplotter" href="https://github.com/wenoptics/cnc-polarplotter"
          />
          <FancyLink
              size="1rem" class="font-light"
              text="Subtitle tools" href="https://github.com/wenoptics/subtitle-tools"
          />
          <FancyLink
              size="1rem" class="font-light"
              text="python-decora" href="https://github.com/wenoptics/python-decora"
          />
        </SectionBlock>

      </div>


    </div>
  </div>

</template>

