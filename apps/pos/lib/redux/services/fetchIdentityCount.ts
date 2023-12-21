import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const counterApi = createApi({
  reducerPath: 'counterApi',
  // http://localhost:4200/api/identity-count
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4200/api/' }),
  endpoints: (builder) => ({
    getIdentityCount: builder.query({
      query: () => `identity-count`,
    }),
  }),
});

export const { useGetIdentityCountQuery } = counterApi;
