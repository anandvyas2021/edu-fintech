import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["Auth"],
        }),
        signup: builder.mutation({
            query: (newUser) => ({
                url: "/auth/signup",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});

export const { useLoginMutation, useSignupMutation } = authApiSlice;
