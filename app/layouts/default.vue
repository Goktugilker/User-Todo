<script setup lang="ts">

</script>

<template>
  <div
    class="w-dvw h-24 flex flex-row"
    :class="isDark ? 'bg-zinc-700 text-white' : 'bg-gray-800 text-white'"
  >
    <div
      class="w-dvw h-24 flex flex-row items-center justify-between px-4 border-b-2"
    >
      <div>
        <h1 class="font-extrabold text-4xl w-96 overflow-y-hidden" @click="$router.push('/')">
          Todo List
        </h1>
      </div>
      <TodoHeader />
    </div>
  </div>
  <slot />
  <div
    class="w-screen h-24 flex flex-row items-center justify-center"
    :class="isDark ? 'bg-zinc-700 text-white' : 'bg-gray-800 text-white' "
  >
    <p class="text-gray-500">
      Made with ❤️ by Goktuğ
    </p>
  </div>
</template>
