import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { getToken } from '../../library/utils/networking/token'
import { head } from 'lodash'

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
    prepareHeaders: (headers, { getState }) => {
      // const token = getToken()
      //
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`)
      // }

      headers.set('content-type', 'application/json;charset=UTF-8')

      return headers
    },
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
