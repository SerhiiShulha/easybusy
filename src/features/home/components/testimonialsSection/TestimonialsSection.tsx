import { css } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { SectionTitle } from '../../../../library/components/typography/typography'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { colors, mq } from '../../../../library/constants/styles'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import sectionBg from '../../../../assets/images/pages/home/testimonials-bg.png'
import quotes from '../../../../assets/images/pages/home/quotes.svg'
import { useGetTestimonialsQuery } from '../../homeAPI'

SwiperCore.use([Navigation, Pagination])

const SectionContainer = styled.section`
  padding-bottom: 6rem;
  padding-top: 6rem;
  width: 100%;
  background-image: url(${sectionBg});
  background-size: cover;

  ${mq.xs} {
    padding-bottom: 4rem;
    padding-top: 4rem;
    background: #0aae59;
  }
`

const Title = styled(SectionTitle)`
  position: relative;
  margin-bottom: 5rem;
  color: #fff;
  z-index: 5;

  ${mq.xs} {
    text-align: center;
  }

  &::before {
    content: url(${quotes});
    position: absolute;
    top: -50%;
    left: -10rem;
    opacity: 0.1;
    z-index: -1;

    ${mq.xs} {
      display: none;
    }
  }
`

const SliderContainer = styled.div`
  width: 63.5rem;

  ${mq.xs} {
    width: 100%;
  }

  .swiper-container {
    padding-bottom: 6rem;

    ${mq.xs} {
      margin-bottom: 4px;
    }

    .swiper-slide {
      ${mq.xs} {
        width: 29rem;
      }
    }

    .swiper-pagination {
      bottom: 0;

      .swiper-pagination-bullet {
        width: 0.6rem;
        height: 0.6rem;
        background-color: #fff;
        opacity: 0.3;
      }

      .swiper-pagination-bullet-active {
        width: 0.6rem;
        height: 0.6rem;
        background-color: #fff;
        opacity: 1;
      }
    }
  }
`

const Slide = styled.div`
  padding: 6.5rem 5rem;
  background-color: #fff;
  border-radius: 12px;

  ${mq.xs} {
    //width: calc(100% - 10px);
    //width: 29rem;
    padding: 2.5rem 1.5rem;
  }
`

const AvatarContainer = styled.div`
  margin-right: 1.5rem;

  ${mq.xs} {
    margin-right: 1.2rem;
  }
`

const Avatar = styled.img`
  height: 6.5rem;
  width: 6.5rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;

  ${mq.xs} {
    height: 5rem;
    width: 5rem;
  }
`

const Name = styled.p`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.4rem;

  ${mq.xs} {
    font-size: 14px;
  }
`

const Description = styled.p`
  color: ${colors.text80};
  font-size: 1.4rem;

  ${mq.xs} {
    font-size: 1.2rem;
  }
`

const MessageContainer = styled.div`
  width: 54rem;
  color: ${colors.text70};

  ${mq.xs} {
    width: 100%;
    font-size: 1.4rem;
  }
`

const SliderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.4rem;
  height: 4.4rem;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #fff;
  transition: 0.3s all;

  &.swiper-button-disabled {
    opacity: 0.3;
    cursor: auto;
  }

  &:hover:not(.swiper-button-disabled) {
    background-color: rgba(255, 255, 255, 1);
    color: ${colors.primary};
  }

  ${mq.xs} {
    display: none;
  }
`

const TestimonialsSection: React.FC = () => {
  const { data, isFetching, isLoading } = useGetTestimonialsQuery(undefined)

  return (
    <SectionContainer>
      <Container
        className={css`
          ${mq.xs} {
            padding: 0;
          }
        `}
      >
        <Row>
          <Col
            md={10}
            offset={{ md: 1 }}
            className={css`
              ${mq.xs} {
                padding: 0 !important;
              }
            `}
          >
            <Title>Testimonials</Title>
            <div className={'flex justify-between items-center'}>
              <SliderButton id={'slider-prev'}>
                <HiOutlineChevronLeft />
              </SliderButton>
              <SliderContainer>
                <Swiper
                  id="testimonials"
                  freeMode={window.innerWidth < 576}
                  centeredSlides={window.innerWidth < 576}
                  slidesPerView={window.innerWidth < 576 ? 'auto' : 1}
                  spaceBetween={window.innerWidth < 576 ? 5 : 30}
                  navigation={{
                    prevEl: '#slider-prev',
                    nextEl: '#slider-next',
                  }}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <Slide>
                      <div className={'flex items-center mb-6'}>
                        <AvatarContainer>
                          <Avatar
                            src={'https://placeimg.com/640/480/people'}
                            alt={'User Name'}
                          />
                        </AvatarContainer>
                        <div>
                          <Name>User Name</Name>
                          <Description>
                            Description description description
                          </Description>
                        </div>
                      </div>
                      <MessageContainer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore{' '}
                        </p>
                      </MessageContainer>
                    </Slide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slide>
                      <div className={'flex items-center mb-6'}>
                        <AvatarContainer>
                          <Avatar
                            src={'https://placeimg.com/640/480/people'}
                            alt={'User Name'}
                          />
                        </AvatarContainer>
                        <div>
                          <Name>User Name</Name>
                          <Description>
                            Description description description
                          </Description>
                        </div>
                      </div>
                      <MessageContainer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore{' '}
                        </p>
                      </MessageContainer>
                    </Slide>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Slide>
                      <div className={'flex items-center mb-6'}>
                        <AvatarContainer>
                          <Avatar
                            src={'https://placeimg.com/640/480/people'}
                            alt={'User Name'}
                          />
                        </AvatarContainer>
                        <div>
                          <Name>User Name</Name>
                          <Description>
                            Description description description
                          </Description>
                        </div>
                      </div>
                      <MessageContainer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore{' '}
                        </p>
                      </MessageContainer>
                    </Slide>
                  </SwiperSlide>
                </Swiper>
              </SliderContainer>
              <SliderButton id={'slider-next'}>
                <HiOutlineChevronRight />
              </SliderButton>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionContainer>
  )
}

export default TestimonialsSection
