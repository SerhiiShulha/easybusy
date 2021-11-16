import React from 'react'
import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { colors, mq } from '../../../../constants/styles'
import { CampRating } from './CampCard'
import { generatePath, Link } from 'react-router-dom'
import { CAMP } from '../../../../constants/routes'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 65px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 17rem;
  object-fit: cover;
  object-position: center;

  ${mq.xs} {
    height: 20rem;
  }
`

const InfoContainer = styled.div`
  padding: 1.5rem 2rem 2.5rem;
`

const Name = styled(Link)`
  font-weight: 600;
  margin-bottom: 5px;
  transition: 0.3s all;

  &:hover {
    color: ${colors.hover};
  }
`

const Description = styled.p`
  margin-bottom: 2rem;
  color: ${colors.text50};
  font-size: 1.4rem;
`

const Price = styled.span`
  font-weight: 600;
`

const PostedCampCard = () => {
  return (
    <Container>
      <Link to={generatePath(CAMP, { campId: 1 })}>
        <Image src={'https://placeimg.com/640/480/arch'} title={'Camp name'} />
      </Link>
      <InfoContainer>
        <Name to={generatePath(CAMP, { campId: 1 })}>Friends Summer Camp</Name>
        <Description>Mont-Tremblant, Qc</Description>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Price>$210/day</Price>
          <CampRating />
        </Flex>
      </InfoContainer>
    </Container>
  )
}

export default PostedCampCard
