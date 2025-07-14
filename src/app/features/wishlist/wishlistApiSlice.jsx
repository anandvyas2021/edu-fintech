import { apiSlice } from "../api/apiSlice";

export const wishlistApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWishlist: builder.query({
            query: () => "/wishlist/list",
            providesTags: ["Wishlist"],
        }),
        addToWishlist: builder.mutation({
            query: (webinar_id) => ({
                url: "/wishlist/add",
                method: "POST",
                body: { webinar_id },
            }),
            invalidatesTags: ["Wishlist"],
        }),
        removeFromWishlist: builder.mutation({
            query: (webinar_id) => ({
                url: `/wishlist/remove`,
                method: "POST",
                body: { webinar_id },
            }),
            invalidatesTags: ["Wishlist"],
        }),
    }),
});

export const {
    useGetWishlistQuery,
    useAddToWishlistMutation,
    useRemoveFromWishlistMutation,
} = wishlistApiSlice;
