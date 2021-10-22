import React from 'react'
import { Header } from './components'
import FeaturedCampsSection from './components/featuredCampsSection/FeaturedCampsSection'
import TestimonialsSection from './components/testimonialsSection/TestimonialsSection'
import OrganizerSection from './components/organizerSection/OrganizerSection'
import Footer from '../../library/components/layout/footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <FeaturedCampsSection />
      <TestimonialsSection />
      <OrganizerSection />
      <Footer />
    </>
  )
}

export default Home
