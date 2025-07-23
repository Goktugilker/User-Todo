<template>
  <header class="w-full flex flex-row items-center justify-between gap-3 py-4 px-6 border-b dark:border-b-secondary-700 border-b-secondary-200">
    <h1 class="font-extrabold text-4xl w-96 overflow-y-hidden" @click="$router.push('/')">
      Todo List
    </h1>
    <div class="flex flex-row gap-2 items-center">
      <UButton
        :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
        variant="ghost"
        size="xl"
        @click="toggleTheme"
      />
      <UButton size="xl" icon="mdi:github" variant="link" target="_blank" href="https://github.com/Goktugilker" />
    </div>
  </header>
</template>
