<script setup lang="ts">
definePageMeta({
  name: 'home',
})
const apiStore = useApiStore()

onMounted(async () => {
  await apiStore.fetchUsers()
})
</script>

<template>
  <div
    class="w-screen flex flex-column h-dvh overflow-hidden"
  >
    <todo-homepage />
  </div>
</template>

<style>
div
{overflow-x: hidden;}
</style>
