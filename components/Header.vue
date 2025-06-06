<!-- components/Header.vue -->

<template>
  <header class="h-16 flex items-center justify-between border-b bg-orange-200 border-b-gray-200 px-4">
    <!-- Left Section: Logo and App Name -->
    <div class="flex items-center space-x-2">
      <img src="/favicon.png" alt="Logo" width="30" height="30" />
      <h1 class="text-xl font-semibold">Nuxt Chatbot</h1>
    </div>

    <!-- Right Section: User Avatar with Dropdown Menu -->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Avatar class="w-10 h-10 cursor-pointer">
          <AvatarImage src="https://github.com/your-username.png" alt="User Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-48" align="end">
        <DropdownMenuLabel class="font-normal">
          <div class="flex flex-col space-y-1">
            <p class="text-sm font-medium leading-none">Your Name</p>
            <p class="text-xs leading-none text-muted-foreground">you@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>

<script setup lang="ts">
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
</script>
