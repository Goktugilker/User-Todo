<script setup lang="ts">
import type { Todo } from '../../types/todo'
import { computed, onMounted, ref, watch } from 'vue'

const todoStore = useTodoStore()
todoStore.todos = []
definePageMeta({
  name: 'userDetails',
})
const choice = ref<'show' | 'create'>('show')
const storedUser = ref<{ id?: number, name?: string } | null>(null)

const userTodoKey = computed(() =>
  storedUser.value?.id !== undefined ? `todos_user_${storedUser.value.id}` : 'todos_default',
)

const storedTodos = ref<Todo[]>([])

onMounted(() => {
  if (process.client) {
    const storedUserData = localStorage.getItem('user') // kullanıcı bilgilerini aldım
    if (storedUserData) {
      storedUser.value = JSON.parse(storedUserData)
    }

    const stored = localStorage.getItem(userTodoKey.value)
    if (stored) {
      storedTodos.value = JSON.parse(stored) // kullanıcıya ait todo'ları aldım
      todoStore.todos = storedTodos.value
    }

    watch(todoStore.todos, (newTodos) => {
      storedTodos.value = newTodos // todo'ları güncelledim
    }, { deep: true, immediate: true })
  }
})
watch(() => todoStore.todos, (newTodos) => {
  if (process.client && newTodos) {
    localStorage.setItem(userTodoKey.value, JSON.stringify(newTodos)) // todo'ları localStorage'a kaydettim
  }
}, { deep: true })
</script>

<template>
  <div
    class="w-dvw min-h-screen flex flex-col items-center justify-center"
    :class="isDark ? 'bg-zinc-600 text-white' : 'bg-gray-800 text-white'"
  >
    <h1 class="text-5xl">
      {{ storedUser?.name ?? '' }}
    </h1>
    <div
      class="w-dvw flex flex-row items-center justify-center scale-100"
    >
      <div class="flex flex-col gap-4 text-white w-dvw min-h-screen items-center">
        <div class="flex flex-row items-center justify-center mt-16 h-20 gap-4">
          <TodoSave @click="choice = 'create'" />
          <TodoUpload @click="choice = 'show'" />
        </div>
        <div v-if="choice === 'show'" class="flex flex-col items-center ">
          <div v-for="todo in storedTodos" :key="todo.id" class="p-4 w-96">
            <div
              v-if="todo.userId === storedUser?.id"
              class="flex flex-col items-start min-h-fit w-full rounded-lg p-4 "
              :class="isDark ? 'bg-zinc-700 text-white' : 'bg-gray-700 text-white'"
            >
              <div class="text-lg">
                {{ todo.text }}
              </div>
              <div class="text-md text-gray-400 w-full">
                {{ todo.description }}
                <UButton
                  icon="i-lucide-trash-2"
                  class="float-right bg-red-500 text-white justify-center"
                  @click="todoStore.deleteTodo(todo.id)"
                />
              </div>
              <div class="text-sm text-gray-400 break-words">
                {{ todo.endDate }}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col items-center">
          <TodoCreate />
        </div>
      </div>
    </div>
  </div>
</template>
