import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../../../../../library/constants/styles'
import { Text } from '../../../../../../library/components/typography/typography'
import { Button, Flex } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { UserAvatar } from '../../../../../../library/components/layout/ui/profileNavDropdown/profileNavDropdown'

const Container = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const ReviewsList = () => {
  return (
    <>
      <div className={'mb-14'}>
        <Review />
        <Review />
        <Review />
      </div>
      <Flex justify={'center'}>
        <Button size={'m'} variant={'action'} width={'19rem'}>
          See More
        </Button>
      </Flex>
    </>
  )
}

const Review = () => {
  return (
    <Container>
      <Flex align={'center'} mb={6}>
        <UserAvatar userPhoto={null} size={'4.8rem'} mr={'1.5rem'} />
        <div>
          <Text size={'2rem'} weight={600} mb={'0.5rem'}>
            Tim Jorney
          </Text>
          <Text size={'1.4rem'} color={colors.text80}>
            Father of 12 y.o Tommy
          </Text>
        </div>
      </Flex>
      <Flex align={'center'} mb={8}>
        <AiFillStar
          fontSize={'2.4rem'}
          color={colors.primary}
          className={'mr-2'}
        />
        <Text as={'span'} size={'2rem'} weight={600}>
          5.0
        </Text>
      </Flex>
      <Text color={colors.text70}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore
      </Text>
    </Container>
  )
}

export default ReviewsList
