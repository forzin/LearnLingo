import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITIAL_STATE = {
    user: {
        name: null,
        email: null,
    },

    isLoading: false,
    error: null,

    token: null,
    isLoggedIn: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    extraReducers: (builder) =>
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
                state.error = null;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isRefreshing = false;
                state.user = action.payload;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.error = action.payload;
            })

            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, () => {
                return INITIAL_STATE;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
});

export const selectUserData = state => state.auth.user
export const selectUserDataIsLoggedIn = state => state.auth.isLoggedIn
export const selectUserDataToken = state => state.auth.token
export const selectUserDataIsRefreshing = state => state.auth.isRefreshing

export const authReducer = authSlice.reducer;