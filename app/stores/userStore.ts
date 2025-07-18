import type { User } from '../types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const users = ref<User[]>([])
  async function fetchUsers() {
    const response = await fetch('https://mockly.atlaxt.me/api/users')
    users.value = await response.json()
  }

  watch(user, (newUser) => {
    if (process.client) {
      localStorage.setItem('user', JSON.stringify(newUser))
    }
  })
  return {
    user,
    users,
    fetchUsers,
  }
})
