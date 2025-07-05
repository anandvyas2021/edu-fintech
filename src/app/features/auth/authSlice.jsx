import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    accessToken: null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.accessToken = null;
            state.user = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
