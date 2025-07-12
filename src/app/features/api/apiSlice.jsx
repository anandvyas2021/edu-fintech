import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl:
            "https://edu-fintech-backend-production.up.railway.app/edu-fintech/api", // Replace with your API URL
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth?.accessToken;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Auth", "Educator", "Webinar", "Cart"], // Optional, for auto-refetching
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => "/user/details",
            providesTags: ["User"],
        }),
        getTransactions: builder.query({
            query: () => "/transactions",
            providesTags: ["Transaction"],
        }),
        // Add more endpoints here
    }),
});

export const { useGetUserDetailsQuery, useGetTransactionsQuery } = apiSlice;
