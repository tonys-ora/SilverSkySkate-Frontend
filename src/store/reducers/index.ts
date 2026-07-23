// ** Redux Imports
import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth'
import setting from './setting'

const reducer = combineReducers({
  auth,
  setting
})

export default reducer
