<script setup lang="ts">
const todoStore = useTodoStore()
todoStore.todos = []
definePageMeta({
  name: 'home',
})
const userStore = useUserStore()

onMounted(async () => {
  await userStore.fetchUsers()
})
</script>

<template>
  <div class="w-full h-full flex justify-center mt-12 overflow-y-auto">
    <home-navigation-menu />
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
