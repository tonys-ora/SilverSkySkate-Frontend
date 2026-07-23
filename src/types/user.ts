export interface User {
  avatar: File | string | null
  email: string
  username: string
  password: string
  firstName: string
  lastName: string
  shareProfile: string
}

export type AccountData = Pick<User, 'email' | 'avatar' | 'username' | 'firstName' | 'lastName' | 'shareProfile'>
