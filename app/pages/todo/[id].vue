<script setup lang="ts">
import type { Todo } from '../../types/todo'

const userStore = useUserStore()
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
const router = useRouter()
onMounted(async () => {
  const _id = router.currentRoute.value.params.id as string | undefined

  const _backHome = () => {
    router.push({
      name: 'home',
    })
  }
  if (!_id) 
    _backHome()


  await userStore.fetchUsers()
    .then(() => {
      userStore.user = userStore.users.find(user => user.id === Number(_id)) || undefined
    })
    .catch(() => _backHome())
})

const storedTodos = ref<Todo[]>([])

onMounted(() => {
 userStore.getuser(storedUser) // kullanıcı bilgilerini aldım

  todoStore.getTodo(userTodoKey, storedTodos) // todo'ları aldım

  watch(todoStore.todos, (newTodos) => {
    todoStore.updateTodo(newTodos, storedTodos) // todo'ları güncelledim
  }, { deep: true, immediate: true })
})
watch(() => todoStore.todos, (newTodos) => {
  if (newTodos) {
    todoStore.saveLocalStorage(userTodoKey, storedTodos) // todo'ları localStorage'a kaydettim
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
  <div class="flex flex-row items-center justify-center gap-4 mt-4">
    <TodoSave @click="choice = 'create'" />
    <TodoUpload @click="choice = 'show'" />
  </div>
    <div
      class="w-dvw flex flex-row items-center justify-center scale-100"
    >
      <div class="flex flex-col gap-4 text-white w-dvw min-h-screen items-center">
        
        <div v-if="choice === 'show'" class="flex flex-col items-center ">
          <div v-if="storedTodos.length === 0" class="p-4 w-96">
            <div
              class="flex flex-col items-center justify-center text-center text-7xl font-bold overflow-y-hidden"
              :class="isDark ? 'text-zinc-700 ' : 'text-gray-700 '"
            >
              <span>no todos available</span>
            </div>
          </div>
          <div v-for="todo in storedTodos" :key="todo.id" class="p-4 w-96">
            <div
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
