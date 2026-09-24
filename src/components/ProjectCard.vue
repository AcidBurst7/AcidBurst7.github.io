<script setup lang="ts">
import type { Project } from '../types/project'

defineProps<{
  project: Project
}>()
</script>
<template>
  <!-- Карточка проекта -->
  <div
    class="border border-grayText bg-cardBg flex flex-col justify-between hover:border-primary transition-colors group"
  >
    <div>
      <!-- Картинка проекта -->
      <div
        class="h-48 bg-[#3B4252] border-b border-grayText relative overflow-hidden flex items-center justify-center p-4"
      >
        <img :src="project.image" :alt="project.title" class="" loading="lazy" />
      </div>
      <!-- ТЕхнический стек -->
      <div class="border-b border-grayText px-4 py-2 text-xs text-grayText flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </span>
      </div>
      <!-- Content -->
      <div class="p-4 space-y-4">
        <h3 class="text-xl font-medium text-whiteText group-hover:text-primary transition-colors">
          {{ project.title }}
        </h3>
        <p class="text-sm text-grayText">
          {{ project.description }}
        </p>
      </div>
    </div>
    <!-- Action Buttons -->
    <div class="p-4 pt-0 flex gap-4">
      <a
        v-if="project.repository_link"
        :href="project.repository_link"
        class="border border-primary px-4 py-1.5 text-xs text-whiteText hover:bg-primary/10 transition-colors"
        >Репозиторий &lt;= &gt;</a
      >
      <a
        v-if="project.link"
        :href="project.link"
        class="border border-primary px-4 py-1.5 text-xs text-whiteText hover:bg-primary/10 transition-colors"
        >Сайт &lt;= &gt;</a
      >
    </div>
  </div>
</template>
