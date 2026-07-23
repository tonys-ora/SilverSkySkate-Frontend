// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: false,
  sidebarIsOpen: false,
  mode: 'social',
  verifyStep: 0
}

const setting = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload
    },
    setSidebar(state, action) {
      state.sidebarIsOpen = action.payload
    },
    setMode(state, action) {
      state.mode = action.payload
    },
    updateVerifyStep(state, action: {payload: number}) {
      state.verifyStep = Math.max(state.verifyStep, action.payload)
    },
    setVerifyStep(state, action: {payload: number}) {
      state.verifyStep = action.payload
    }
  }
})

export default setting.reducer

export const { setTheme, setMode, setSidebar, updateVerifyStep, setVerifyStep } = setting.actions
