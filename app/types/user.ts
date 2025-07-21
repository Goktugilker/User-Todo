export interface User {
  id: number
  name: string
  email: string
  avatar: string
  role: string
  registeredAt: string
  phone: string
  active: boolean
  address: {
    city: string
    country: string
  }
}
