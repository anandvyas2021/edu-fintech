import { apiSlice } from "../api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => "/cart",
            providesTags: ["Cart"],
        }),
        addToCart: builder.mutation({
            query: (webinar_id) => ({
                url: "/cart/add",
                method: "POST",
                body: { webinar_id },
            }),
            invalidatesTags: ["Cart"],
        }),
        removeFromCart: builder.mutation({
            query: (id) => ({
                url: `/cart/remove/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
        clearCart: builder.mutation({
            query: () => ({
                url: "/cart/clear",
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
    }),
});

export const {
    useGetCartQuery,
    useAddToCartMutation,
    useRemoveFromCartMutation,
    useClearCartMutation,
} = cartApiSlice;
