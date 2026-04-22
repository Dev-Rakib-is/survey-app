

import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "../feature/auth/AuthSlice"

export const store = configureStore({
    reducer: {
        Auth: AuthReducer
    }
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']