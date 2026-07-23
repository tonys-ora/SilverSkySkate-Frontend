import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AuthState, LoginUserRes } from '@/types'

const initialState: AuthState = {
  isLoggedIn: false,
  chatRoomOpen: false,
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginUserRes>) {
      state.isLoggedIn = true
      state.user = { username: action.payload.username, userId: action.payload.userId, email: action.payload.email }
      state.token = action.payload.token
    },
    logout(state) {
      state.isLoggedIn = false
      state.user = null
      state.token = null
    },
    updateUser(state, action: PayloadAction<Partial<AuthState['user']>>) {
      if (state.isLoggedIn && state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
    setChatRoom(state, action) {
      state.chatRoomOpen = action.payload
    }
  }
})

export default authSlice.reducer

export const { login, logout, updateUser, setChatRoom } = authSlice.actions
