import type { Todo } from '../types/todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const todo = ref<Todo>()
  const storedUser = ref<{ id?: number, name?: string } | null>(null)
  onMounted(() => {
    if (process.client) {
      const stored = localStorage.getItem('user')
      if (stored) {
        storedUser.value = JSON.parse(stored)
      }
      const storedTodos = localStorage.getItem('todos')
      if (storedTodos) {
        todos.value = JSON.parse(storedTodos)
      }
    }

    watch(todos, (newTodos) => {
      if (process.client) {
        localStorage.setItem('todos', JSON.stringify(newTodos))
      }
    }, { deep: true })
  })
  const toast = useToast()
  function createToast() {
    toast.add({
      title: 'Todo Oluşturuldu!',
      description: 'Todo başarıyla oluşturuldu.',
      duration: 3000,
    })
  }
  function deleteToast() {
    toast.add({
      title: 'Todo Silindi!',
      description: 'Todo başarıyla silindi.',
      duration: 3000,
    })
  }
  const createTodo = (userId:number,text:string,description:string,endDate:string,status:boolean) => { 
      todos.value.push({
        userId,
        id: new Date().getTime(),
        text,
        endDate,
        description,
        status,
      })
      createToast()
    }
  const deleteTodo = (key: number) => {
    const id = todos.value.findIndex((todo) => todo.id === key)
    if (id !== -1) {
      todos.value.splice(id, 1)
      deleteToast()
    }
  }
  return {
    todos,
    todo,
    createTodo,
    deleteTodo,
  }
})
