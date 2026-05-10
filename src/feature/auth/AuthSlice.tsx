import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface User {
    id: string,
    name: string,
    password: string,
    role: "USER" | "ADMIN"
}

interface AuthState {
    user: User | null
    token: string | null
}

const initialState: AuthState = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCrediantial: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token

        },

        logout: (state) => {
            state.user = null;
            state.token = null
        }
    }
})

export const { setCrediantial, logout } = authSlice.actions;
export default authSlice.reducer