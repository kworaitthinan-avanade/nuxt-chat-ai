<!-- layouts/default.vue -->

<template>
  <div class="flex flex-col h-screen">
    <AppHeader />

    <div class="flex flex-1">
      <AppSidebar />

      <main class="flex-1 p-4 overflow-y-auto">
        <slot />

        <div class="h-10 flex items-center justify-center border-t border-gray-200">
          <p>&copy; 2025</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/Header.vue'
import AppSidebar from '@/components/Sidebar.vue'
</script>
