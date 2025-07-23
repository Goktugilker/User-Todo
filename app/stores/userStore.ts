import type { User } from '../types/user'

export const useUserStore = defineStore('user', () => {
  const config = useRuntimeConfig()
  const key = config.public.userKey

  const user = ref<User>()
  const users = ref<User[]>([])
  async function fetchUsers() {
    const response = await fetch('https://mockly.atlaxt.me/api/users')
    users.value = await response.json()
  }

  watch(user, (newUser) => {
    localStorage.setItem(key as string, JSON.stringify(newUser))
  })

  const getuser = (storedUser: any) => {
    const storedUserData = localStorage.getItem(key as string) // kullanıcı bilgilerini aldım
    if (!storedUserData)
      return
    storedUser.value = JSON.parse(storedUserData)
  }
  return {
    user,
    users,
    fetchUsers,
    getuser,
  }
})
