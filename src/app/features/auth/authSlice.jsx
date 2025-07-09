import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const initialState = {
    user: null,
    accessToken: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.accessToken = accessToken;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        // Optional: Clear cache on logout
        builder.addCase(authSlice.actions.logout, (state, action) => {
            apiSlice.util.resetApiState();
        });
    },
});

export const { login, setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
