<script setup lang="ts">
</script>

<template>
  <div class="flex flex-row items-center justify-center gap-3 w-36">
    <UButton
      :icon="isDark() ? 'i-lucide-sun' : 'i-lucide-moon'"
      variant="ghost"
      class="scale-150"
      @click="toggleTheme"
    />
    <UButton class="bg-transparent">
      <img src="../../image/github.png ">
    </UButton>
  </div>
</template>
