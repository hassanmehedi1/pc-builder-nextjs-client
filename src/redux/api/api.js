import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pc-builder-server-kappa.vercel.app",
  }),
  endpoints: (builder) => ({
    getNewses: builder.query({
      query: () => "/news",
    }),
  }),
});

export const { useGetNewsesQuery } = apiSlice;
