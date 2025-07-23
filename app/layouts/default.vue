<script setup lang="ts">

</script>

<template>
  <div class="fixed left-0 top-0 w-screen h-screen flex flex-col">
    <app-header />
    <div class="w-full h-full flex flex-col">
      <slot />
    </div>
    <app-footer />
  </div>
</template>
