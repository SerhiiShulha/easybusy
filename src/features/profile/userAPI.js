import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const userAPI = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    prepareHeaders: (headers, { getState }) => {
      headers.set('content-type', 'application/json;charset=UTF-8')
      headers.set('authorization', getState().auth.token)

      return headers
    },
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: ({ userId, role }) =>
        role === 'organizer' ? `organizers/${userId}` : `parents/${userId}`,
      keepUnusedDataFor: 3600,
    }),
  }),
})

export const { useGetCurrentUserQuery, useLazyGetCurrentUserQuery } = userAPI
