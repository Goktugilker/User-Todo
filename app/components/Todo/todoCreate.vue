<script setup lang="ts">

const todoStore = useTodoStore()
const storedUser = ref<{ id?: number, name?: string } | null>(null)
onMounted(() => {
  if (process.client) {
    const stored = localStorage.getItem('user')
    if (stored) {
      storedUser.value = JSON.parse(stored)
    }
  }
})

const text = ref('')
const description = ref('')
const endDate = ref('')

</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <div
      class="flex flex-col items-center justify-center rounded-lg shadow-lg p-4"
      :class="isDark ? 'bg-zinc-700 text-white' : 'bg-gray-700 text-white' "
    >
      <span>Todo Konusu</span>
      <UInput
        v-model="text"
        type="text"
        placeholder="Todo Text"
        class="w-96 mb-4"
      />
      <span>Todo Açıklaması</span>
      <UInput
        v-model="description"
        type="text"
        placeholder="Todo Description"
        class="w-96 mb-4"
      />
      <span>Todo Bitiş Tarihi</span>
      <UInput
        v-model="endDate"
        type="date"
        class="w-96 mb-4"
      />
      <UButton class="mt-4" @click="todoStore.createTodo(storedUser?.id || 0, text, description, endDate, false),text = '', description = '', endDate = ''">
        Save Todo
      </UButton>
    </div>
  </div>
</template>
