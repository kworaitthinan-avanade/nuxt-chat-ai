<!-- components/Sidebar.vue -->

<template>
  <aside class="w-65 bg-gray-100 p-4 border-r border-gray-200 text-sm">
    <nav class="space-y-0">
      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <SquarePen :size="18" />
        <NuxtLink to="/" class="block rounded">New chat</NuxtLink>
      </div>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <Search :size="18" />
        <NuxtLink to="/" class="block rounded">Search chats</NuxtLink>
      </div>

      <hr class="my-1 border-t border-gray-200" />
      <NuxtLink to="/" class="text-gray-400 block rounded">Agents</NuxtLink>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">Agent 1</NuxtLink>
      </div>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">Agent 2</NuxtLink>
      </div>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">Agent 3</NuxtLink>
      </div>

      <hr class="my-1 border-t border-gray-200" />
      <NuxtLink to="/" class="text-gray-400 block rounded">Today</NuxtLink>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">システムのパフォーマンス改善案</NuxtLink>
      </div>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">プロジェクト進行状況の確認</NuxtLink>
      </div>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">オンボーディング手順</NuxtLink>
      </div>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">社内ドキュメントの整理と統一</NuxtLink>
      </div>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">リモートワーク環境の最適化</NuxtLink>
      </div>

      <div class="flex items-center space-x-1 py-2 px-0 transition-colors duration-300 hover:bg-gray-200">
        <NuxtLink to="/" class="block rounded">顧客対応マニュアルの見直し</NuxtLink>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { SquarePen, Search } from 'lucide-vue-next'
</script>
