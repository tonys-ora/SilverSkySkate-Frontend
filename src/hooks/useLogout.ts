import { dispatch, logout } from '@/store'

export function useLogout() {
  const logoutUser = () => {
    console.log('logoutUser')
    dispatch(logout())
  }

  return logoutUser
}
