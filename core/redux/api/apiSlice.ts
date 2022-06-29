/* eslint-disable import/prefer-default-export */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APIURL,
  }),
  tagTypes: ["Post", "User"],
  endpoints: () => ({}),
});
