<script setup lang="ts">
const userStore = useApiStore()
</script>

<template>
    <div
        class="w-dvw h-dvh flex flex-row items-center justify-center gap-4 scale-100 overflow-hidden"
        :class="isDark() ? 'bg-zinc-600 text-white' : 'bg-gray-800 text-white' "
    >
    <h1>{{ userStore.user }}</h1>
        <div
        class="flex flex-row gap-4 text-white w-dvw h-dvh justify-center items-center mb-96 "
        >
        <TodoSave />
        <TodoUpload/>
        </div>
    </div>
</template>
