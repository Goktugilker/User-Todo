<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const userStore = useApiStore()
const users = computed<NavigationMenuItem[][]>(() => [
  userStore.users.map(user => ({
    label: user.name,
    icon: 'i-lucide-user',
    class: 'text-white',
    to: `/todo/${user.id}`,
    
  })),
])
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :items="users"
    class="data-[orientation=vertical]:w-48 text-red-600 overflow-hidden"
    :class="isDark() ? 'bg-zinc-700 text-white' : 'bg-gray-800 text-white' "
  />
</template>
