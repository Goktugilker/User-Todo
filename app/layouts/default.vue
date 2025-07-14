<script setup lang="ts">
</script>
<template>
<div class="w-screen h-dvh flex flex-row">

    <div class="w-screen h-24 flex flex-row items-center justify-between px-4 border-b-2 border-white">
        <div>
            <h1 class="font-extrabold text-5xl">Todo List</h1>
        </div>
        <div class="flex flex-row items-center justify-center gap-3">
            <UButton icon="i-lucide-sun"  />
            <UButton class="bg-transparent"><img src="../image/github.png "></UButton>
        </div>

    </div>
</div>
<slot/>
</template>