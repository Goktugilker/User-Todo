<script setup lang="ts">
</script>

<template>
  <div class="w-dvw h-24 flex flex-row">
    <div
      class="w-dvw h-24 flex flex-row items-center justify-between px-4 border-b-2"
      :class="isDark() ? 'border-white' : 'border-gray-950'"
    >
      <div>
        <h1 class="font-extrabold text-6xl w-96 overflow-y-hidden">
          Todo List
        </h1>
      </div>
      <TodoHeader />
    </div>
  </div>
  <slot />
</template>
