import { apiSlice } from "../api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCart: builder.query({
            query: () => "/cart",
            providesTags: ["Cart"],
        }),
        addToCart: builder.mutation({
            query: (data) => ({
                url: "/cart/add",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Cart"],
        }),
        updateCart: builder.mutation({
            query: ({ cart_id, webinar_id, quantity }) => ({
                url: "/cart/update",
                method: "POST",
                body: { cart_id, webinar_id, quantity },
            }),
            invalidatesTags: ["Cart"],
        }),
        removeFromCart: builder.mutation({
            query: ({ cart_id, item_index }) => ({
                url: `/cart/remove`,
                method: "POST",
                body: { cart_id, item_index },
            }),
            invalidatesTags: ["Cart"],
        }),
        clearCart: builder.mutation({
            query: () => ({
                url: "/cart/clear-cart",
                method: "POST",
                // body: { cart_id },
            }),
            invalidatesTags: ["Cart"],
        }),
    }),
});

export const {
    useGetCartQuery,
    useAddToCartMutation,
    useUpdateCartMutation,
    useRemoveFromCartMutation,
    useClearCartMutation,
} = cartApiSlice;
