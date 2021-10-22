import styled from '@emotion/styled'
import React from 'react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { Link as ButtonLink } from '@chakra-ui/react'
import { SectionTitle } from '../../../../library/components/typography/typography'
import { colors, mq } from '../../../../library/constants/styles'
import CampCard from '../../../../library/components/layout/listItems/campCard/CampCard'
import { css } from '@emotion/css'
import CampsSlider from './CampsSlider'

const SeeMore = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 22px;
  transition: 0.3s all;

  &:hover {
    color: ${colors.primary};
  }

  span {
    margin-right: 10px;
  }
`

const FeaturedCampsSection: React.FC = () => {
  return (
    <Container
      component={'section'}
      className={css`
        padding-bottom: 6rem;
        padding-top: 15rem;

        ${mq.xs} {
          padding-bottom: 10rem;
          padding-top: 4.5rem;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
      `}
    >
      <div className={'flex justify-between items-center mb-16'}>
        <SectionTitle className={'ml-6'}>Featured camps</SectionTitle>
        <Hidden xs>
          <SeeMore to={'/'}>
            <span>See all camps</span>
            <HiOutlineChevronRight />
          </SeeMore>
        </Hidden>
      </div>
      <Hidden xs>
        <Row>
          <Col md={4}>
            <CampCard />
          </Col>
          <Col md={4}>
            <CampCard />
          </Col>
          <Col md={4}>
            <CampCard />
          </Col>
        </Row>
      </Hidden>
      <Visible xs>
        <CampsSlider />
        <div className={'flex justify-center'}>
          <ButtonLink size={'m'} variant={'outline'} as={Link} to={'/'}>
            <div className="flex items-center">
              <span>See all camps</span>
              <HiOutlineChevronRight />
            </div>
          </ButtonLink>
        </div>
      </Visible>
    </Container>
  )
}

export default FeaturedCampsSection
