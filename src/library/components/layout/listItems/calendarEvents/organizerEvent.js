import React from 'react'
import { BsCalendar4Event, BsHouse, HiChevronRight } from 'react-icons/all'
import styled from '@emotion/styled'
import { Box, Divider, Flex, Link } from '@chakra-ui/react'
import { Text } from '../../../typography/typography'
import { CampRating } from '../campCard/CampCard'
import { colors } from '../../../../constants/styles'
import { Link as RouterLink } from 'react-router-dom'
import { HiOutlineChevronRight } from 'react-icons/hi'

const CardContainer = styled.div`
  display: flex;
  padding: 2.5rem 3rem;
  margin-bottom: 3rem;
  background-color: #fff;
  box-shadow: 0 8px 60px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
`

const LeftCol = styled.div`
  display: flex;
  flex: 1;
`

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;
  padding-left: 2.5rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`

const Image = styled.img`
  width: 16rem;
  height: 13.5rem;
  margin-right: 1.5rem;
  object-fit: cover;
  object-position: center;
  border-radius: 1rem;
`

const OrganizerEvent = () => {
  return (
    <Box mb={20}>
      <CardContainer>
        <LeftCol>
          <Image src={'https://placeimg.com/640/480/arch'} />
          <Flex direction={'column'} justifyContent={'space-between'}>
            <div>
              <Flex>
                <Text
                  as={'span'}
                  size={'1.8rem'}
                  weight={600}
                  className={'mr-4'}
                >
                  Friends Summer Camp
                </Text>
                <CampRating />
              </Flex>
              <Text color={colors.text50}>Mont-Tremblant, Qc</Text>
            </div>
            <Link
              as={RouterLink}
              to={''}
              variant={'text'}
              size={'text'}
              color={colors.text50}
              fontWeight={500}
            >
              <span className={'mr-4'}>42 clients</span>
              <HiOutlineChevronRight fontSize={20} />
            </Link>
          </Flex>
        </LeftCol>
        <RightCol>
          <Text
            size={'1.4rem'}
            weight={600}
            lineHeight={'2.4rem'}
            className={'mb-2'}
          >
            Meeting Type:
          </Text>
          <Text color={colors.text60}>Introducing the camp to children</Text>
          <Text
            size={'1.4rem'}
            weight={600}
            lineHeight={'2.4rem'}
            className={'mb-2'}
          >
            Time
          </Text>
          <Text color={colors.text60}>10 Aug, 2021. 9:30 AM</Text>
        </RightCol>
      </CardContainer>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'full'}
        px={3}
      >
        <Flex alignItems={'center'}>
          <BsHouse color={colors.primary} fontSize={20} className={'mr-6'} />
          <Text weight={600} size={'1.8rem'}>
            Contact camp
          </Text>
        </Flex>
        <RouterLink to={''}>
          <HiOutlineChevronRight fontSize={26} color={colors.text50} />
        </RouterLink>
      </Flex>
      <Divider className={'mt-8'} />
    </Box>
  )
}

export default OrganizerEvent
