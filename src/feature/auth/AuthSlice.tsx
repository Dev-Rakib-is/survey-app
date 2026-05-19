import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: string;
    name: string;
    password?: string;
    role: "USER" | "ADMIN";
}

interface AuthState {
    user: User | null;
    token: string | null;
}

const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");


let parsedUser = null;
if (storedUser && storedUser !== "undefined" && storedUser !== "null") {
    try {
        parsedUser = JSON.parse(storedUser);
    } catch (e) {
        console.error("Failed to parse user from localStorage", e);
        localStorage.removeItem("user");
    }
}

const initialState: AuthState = {

    token: storedToken && storedToken !== "undefined" && storedToken !== "null" ? storedToken : null,
    user: parsedUser
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCrediantial: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;

            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        },

        logout: (state) => {
            state.user = null;
            state.token = null;

            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }
});

export const { setCrediantial, logout } = authSlice.actions;
export default authSlice.reducer;
