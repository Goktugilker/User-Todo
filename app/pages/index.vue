<script setup lang="ts">
definePageMeta({
  name: 'home',
})
const userStore = useUserStore()

onMounted(async () => {
  await userStore.fetchUsers()
})
</script>

<template>
  <div class="w-screen flex flex-column h-dvh overflow-hidden">
    <todo-homepage />
  </div>
</template>

<!-- bu style kodu bütün heryerde x ekseninde kaydırmaları engeller eğer sadece bu
sayfa ile sınırlı olmasını istiyorsan scoped tagini ekleyebilirsin
veya tailwind ile divin içerisinde overflow-x-hidden ekleyebilirsin -->

<style>
div {
  overflow-x: hidden;
}
</style>
