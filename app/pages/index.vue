<script setup lang="ts">
useHead({
  title: 'Todo List',
})
</script>

<template>
  <div 
  class="w-screen flex flex-column h-dvh"
  :class="isDark() ? 'bg-zinc-600 text-white' : 'bg-gray-800 text-white' ">
    <todo-homepage />
  </div>
</template>

<style>
div
{overflow-x: hidden;}
</style>
