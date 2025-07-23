import type { User } from '../types/user'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const users = ref<User[]>([])
  async function fetchUsers() {
    const response = await fetch('https://mockly.atlaxt.me/api/users')
    users.value = await response.json()
  }

  watch(user, (newUser) => {
    localStorage.setItem('user', JSON.stringify(newUser))
  })

  const getuser = (storedUser:any) => {
    const storedUserData = localStorage.getItem('user') // kullanıcı bilgilerini aldım
    if (storedUserData) {
      storedUser.value = JSON.parse(storedUserData)
    }
  }
  return {
    user,
    users,
    fetchUsers,
    getuser,
  }
})
