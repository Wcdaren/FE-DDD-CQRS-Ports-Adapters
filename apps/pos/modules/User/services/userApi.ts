import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../domain/entity/user';
const baseUrl = `https://pos-test.castlery.sg/api/`;
// const baseUrl = `https://api.realworld.io/api/`;

/**
 * /api/sales_users get all sales users

/api/users create new user

Vapi/users /{id} get user info

/api/users/{id} udpate user info

/api/users/fid} /current_order get the current cart of a login user in spectfic channel
 *
 */
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getSalesUsers: builder.query<User[], void>({
      query: () => `user/sales`,
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: `user`,
        method: 'POST',
        body,
      }),
    }),
    getUser: builder.query<User, string>({
      query: (id) => `user/${id}`,
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: ({ id, ...patch }) => ({
        url: `user/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
  }),
});
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSalesUsersQuery } = userApi;
export const { useGetRetailsQuery } = retailsApi;
