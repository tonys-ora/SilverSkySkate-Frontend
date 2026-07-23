import { User } from './user'

export interface LoginUserRes {
  userId: string
  username: string
  email: string
  token: string
}

export type LoginUserReq = Pick<User, 'email' | 'password'>

export type SignInUserData = Omit<LoginUserRes, 'token'> | null

export interface AuthState {
  isLoggedIn: boolean
  chatRoomOpen: boolean
  user: SignInUserData
  token: string | null
}

export type RegisterUserReq = Pick<User, 'email' | 'username' | 'password'> & { confirmPassword: string }
