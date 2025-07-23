<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const userStore = useUserStore()
const users = computed<NavigationMenuItem[][]>(() => [
  userStore.users.map(user => ({
    label: user.name,
    icon: 'i-lucide-user',
    to: {
      name: 'userDetails',
      params: {
        id: user.id,
      },
    },
    onSelect: () => {
      userStore.user = user
    },
  })),
])
</script>

<template>
  <UNavigationMenu
    orientation="vertical"
    :items="users"
    class="data-[orientation=vertical]:w-48 overflow-hidden"
  />
</template>
