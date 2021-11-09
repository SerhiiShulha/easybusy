import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const homeAPI = createApi({
  reducerPath: 'home',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
    prepareHeaders: (headers, { getState }) => {
      headers.set('content-type', 'application/json;charset=UTF-8')

      return headers
    },
  }),
  endpoints: (builder) => ({
    getFeaturedCamps: builder.query({
      query: () => 'featuredCampuses',
    }),
    getTestimonials: builder.query({
      query: () => 'testimonials',
    }),
  }),
})

export const { useGetFeaturedCampsQuery, useGetTestimonialsQuery } = homeAPI
