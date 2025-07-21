<script setup lang="ts">
</script>

<template>
  <div
    class="w-dvw h-dvh flex flex-row items-center justify-center gap-4 scale-110 "
    :class="isDark ? 'bg-zinc-600 text-white' : 'bg-gray-800 text-white' "
  >
    <div
      class="flex flex-row gap-4 text-white w-dvw h-dvh justify-center items-center "
    >
      <!-- <TodoUpload />
      <TodoUserReload />
      <USelectMenu
        v-model="userStore.user"
        :items="userStore.users ?? []"
        label-key="name"
        class="w-48"
        :class="isDark ? 'border-zinc-800 shadow-lg shadow-amber-600 bg-zinc-700 text-white' : 'border-gray-700 shadow-lg shadow-gray-600 bg-gray-700 text-white' "
      /> -->
      <home-navigation-menu class="scale-150 " />
    </div>
    <div />
  </div>
</template>
