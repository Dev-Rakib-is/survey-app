

import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "../feature/auth/AuthSlice"
import { ServiceReducer } from '../feature/Service/servicesSlice'

export const store = configureStore({
    reducer: {
        Auth: AuthReducer
        Service:ServiceReducer
    }
})


export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']