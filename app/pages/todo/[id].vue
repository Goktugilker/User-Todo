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
    class="flex flex-col items-center justify-center gap-4"
  >
    <h1 class="text-5xl">
      {{ storedUser?.name ?? '' }}
    </h1>
    <div class="flex flex-row items-center justify-center gap-4 p-4">
      <TodoSave @click="choice = 'create'" />
      <TodoUpload @click="choice = 'show'" />
    </div>
    <div
      class=" flex flex-row items-center justify-center"
    >
      <div class="flex flex-col gap-4 text-white items-center w-full">
        <div v-if="choice === 'show'" class="flex flex-col items-center w-full">
          <div v-if="storedTodos.length === 0" class="p-4">
            <div
              class="flex flex-col items-center justify-center text-center text-7xl font-bold overflow-y-hidden"
              :class="isDark ? 'text-zinc-700 ' : 'text-gray-700 '"
            >
              <span>no todos available</span>
            </div>
          </div>
          <div
            v-for="todo in storedTodos" :key="todo.id"
            class="md:min-w-xl w-xs flex flex-row justify-between items-center p-4 rounded-4xl"
            :class="isDark ? 'bg-zinc-800/60' : 'bg-secondary-600/30 text-black'"
          >
            <div class="flex flex-col w-full  ">
              <span>
                {{ todo.text }}
              </span>
              <span>
                {{ todo.description }}
              </span>
              <span>
                {{ todo.endDate }}
              </span>
            </div>
            <UButton
              icon="i-lucide-trash-2"
              color="error"
              @click="todoStore.deleteTodo(todo.id)"
            />
          </div>
        </div>
        <div v-else class="flex flex-col items-center">
          <TodoCreate />
        </div>
      </div>
    </div>
  </div>
</template>
