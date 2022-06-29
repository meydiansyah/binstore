import { apiSlice } from "@/core/redux/api/apiSlice";
import { addUser } from "@/core/redux/slices/auth/action";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // `onSuccess` side-effect
          dispatch(addUser({ token: data, user: { id: 1, name: "Budi" } }));
        } catch (err) {
          // `onError` side-effect
        }
      },
    }),
  }),
});

export const { useLoginMutation } = extendedApiSlice;
