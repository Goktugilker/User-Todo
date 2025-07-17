import type { User } from '../types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const users = ref<User[]>([])
  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  }

  return {
    user,
    users,
    fetchUsers,
  }
})
