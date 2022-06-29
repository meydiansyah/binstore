import { apiSlice } from "@/core/redux/api/apiSlice";
import { ProductType } from "@/core/types/post";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<ProductType[], string>({
      query: (args) => `/products${args ? /category/ + args : ""}`,
    }),
    getPostById: builder.query<ProductType, number>({
      query: (args) => `/products/${args}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories ",
      providesTags: ["Post"],
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: initialPost,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddNewPostMutation,
  useGetCategoriesQuery,
  useLazyGetPostsQuery,
  useGetPostByIdQuery,
} = extendedApiSlice;
