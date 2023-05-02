import { configureStore } from '@reduxjs/toolkit'
import greetingReducer from './greetings/greeting'

export const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
})