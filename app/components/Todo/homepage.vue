<script setup lang="ts">
const items = ref([])
const value = ref()
</script>

<template>
  <div
    class="w-dvw h-dvh flex flex-row items-center justify-center gap-4  -my-64 scale-110"
    :class="isDark() ? 'bg-zinc-600 text-white' : 'bg-gray-800 text-white' "
  >
    <UButton
      label="Todoları Yükle"
      icon="i-lucide-refresh-cw"
      class="bg-error-600 text-white"
    />
    <UButton
      label="Kişileri Yenile"
      icon="lucide:user-round-search"
      class="bg-success-600 text-white"
    />
    <USelectMenu
      v-model="value"
      :items="items"
      class="w-48"
      variant="soft"
      :class="isDark() ? 'border-zinc-800 shadow-lg shadow-amber-600 bg-zinc-700' : 'border-gray-700 shadow-lg shadow-gray-600 bg-gray-700' "
    />
  </div>
</template>
