<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
</script>
<template>
  <section id="works" class="space-y-12">
    <!-- Header with Line -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4 w-full max-w-xl">
        <h2 class="text-2xl sm:text-3xl font-medium text-whiteText whitespace-nowrap">
          <span class="text-primary">#</span>мои проекты
        </h2>
        <div class="h-[1px] bg-primary w-full"></div>
      </div>
      <!-- <a
        href="#works"
        class="hidden sm:inline-block text-whiteText hover:text-primary transition-colors text-sm"
      >
        Посмотреть всё ~~&gt;
      </a> -->
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      ></ProjectCard>
    </div>
  </section>
</template>
