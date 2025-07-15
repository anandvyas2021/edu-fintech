import { apiSlice } from "../api/apiSlice";

export const webinarApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllWebinars: builder.query({
            // query: () => "/webinars",
            // providesTags: ["Webinar"],
            query: ({ page = 1, limit = 10 }) => `/webinars?page=${page}`,
            providesTags: (result) =>
                result?.data
                    ? [
                          ...result?.data?.data?.map((webinar) => ({
                              type: "Webinar",
                              id: webinar._id,
                          })),
                          { type: "Webinar", id: "LIST" },
                      ]
                    : [{ type: "Webinar", id: "LIST" }],
        }),
        getWebinarById: builder.query({
            query: (id) => `/webinars?id=${id}`,
            providesTags: (result, error, id) => [{ type: "Webinar", id }],
        }),
        getWebinarBySlug: builder.query({
            query: (slug) => `/webinars?slug=${slug}`,
            providesTags: (result, error, slug) => [
                { type: "Webinar", id: slug },
            ],
        }),
        addWebinar: builder.mutation({
            query: (data) => ({
                url: "/webinars",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Webinar"],
        }),
        updateWebinar: builder.mutation({
            query: ({ id, data }) => ({
                url: `/webinars/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "Webinar", id },
            ],
        }),
        deleteWebinar: builder.mutation({
            query: (id) => ({
                url: `/webinars/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Webinar"],
        }),
        getWebinarPricing: builder?.mutation({
            query: (data) => ({
                url: "/webinars/calculate-pricing",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const {
    useGetAllWebinarsQuery,
    useGetWebinarByIdQuery,
    useGetWebinarBySlugQuery,
    useAddWebinarMutation,
    useUpdateWebinarMutation,
    useDeleteWebinarMutation,
    useGetWebinarPricingMutation,
} = webinarApiSlice;
