import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

interface FeaturedCamp {
  id: number
  name: string
  location: string
  rating: number
  image: string
}

interface Testimonial {
  id: number
  userName: string
  descriptions: string
  photo: string | null
  message: string
}

export const homeAPI = createApi({
  reducerPath: 'home',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (builder) => ({
    getFeaturedCamps: builder.query<FeaturedCamp[], unknown>({
      query: () => 'featuredCampuses',
    }),
    getTestimonials: builder.query<Testimonial[], undefined>({
      query: () => 'testimonials',
    }),
  }),
})

export const { useGetFeaturedCampsQuery, useGetTestimonialsQuery } = homeAPI
