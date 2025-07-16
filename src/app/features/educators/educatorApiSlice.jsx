import { apiSlice } from "../api/apiSlice";

export const educatorApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllEducators: builder.query({
            query: () => "/educators",
            providesTags: ["Educator"],
        }),
        getEducatorById: builder.query({
            query: (id) => `/educators?id=${id}`,
            providesTags: (result, error, id) => [{ type: "Educator", id }],
        }),
        getEducatorBySlug: builder.query({
            query: (slug) => `/educators?slug=${slug}`,
            providesTags: (result, error, slug) => [
                { type: "Educator", id: slug },
            ],
        }),
        addEducator: builder.mutation({
            query: (data) => ({
                url: "/educators",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Educator"],
        }),
        updateEducator: builder.mutation({
            query: ({ id, data }) => ({
                url: `/educators/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "Educator", id },
            ],
        }),
        deleteEducator: builder.mutation({
            query: (id) => ({
                url: `/educators/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Educator"],
        }),
    }),
});

export const {
    useGetAllEducatorsQuery,
    useGetEducatorByIdQuery,
    useGetEducatorBySlugQuery,
    useAddEducatorMutation,
    useUpdateEducatorMutation,
    useDeleteEducatorMutation,
} = educatorApiSlice;
