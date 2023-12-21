import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = `https://pos-test.castlery.sg/api/`;
// const baseUrl = `https://api.realworld.io/api/`;

export const retailsApi = createApi({
  reducerPath: 'retailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getRetailDetail: builder.query({
      query: ({ id, ...rest }) => `retail/${id}`,
    }),
    getRetails: builder.query({
      query: () => `retails`,
    }),
  }),
});

export const { useGetRetailsQuery } = retailsApi;
