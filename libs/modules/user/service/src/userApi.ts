import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { User } from '@castlery/modules/user/domain';
// import { User } from '../domain/entity/user';
// const baseUrl = `https://pos-test.castlery.sg/api/`;
const baseUrl = process.env.NEXT_PUBLIC_API_HOST;

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password, grant_type = 'password' }) => ({
        url: `oauth/token`,
        method: 'POST',
        body: {
          username,
          password,
          grant_type,
        },
      }),
      // transformResponse
    }),
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { } = userApi;
export const {
  endpoints: { createUser, getSalesUsers, getUser, login, updateUser },
  useCreateUserMutation,
  useGetSalesUsersQuery,
  useGetUserQuery,
  useLoginMutation,
  useUpdateUserMutation,
} = userApi;
