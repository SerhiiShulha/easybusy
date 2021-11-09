import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const authAPI = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    prepareHeaders: (headers, { getState }) => {
      headers.set('content-type', 'application/json;charset=UTF-8')

      return headers
    },
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (credentials) => ({
        url: 'user/authenticate',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const {} = authAPI
