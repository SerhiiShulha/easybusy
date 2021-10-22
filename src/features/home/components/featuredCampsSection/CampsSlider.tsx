import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../../../../library/constants/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import CampCard from '../../../../library/components/layout/listItems/campCard/CampCard'

const SliderContainer = styled.div`
  margin-bottom: 4rem;
  .swiper-slide {
    ${mq.xs} {
      width: 23rem;
    }
  }
`

const CampsSlider: React.FC = () => {
  return (
    <SliderContainer>
      <Swiper
        id="camps"
        freeMode
        centeredSlides
        slidesPerView={'auto'}
        spaceBetween={15}
      >
        <SwiperSlide>
          <CampCard />
        </SwiperSlide>
        <SwiperSlide>
          <CampCard />
        </SwiperSlide>
        <SwiperSlide>
          <CampCard />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  )
}

export default CampsSlider
