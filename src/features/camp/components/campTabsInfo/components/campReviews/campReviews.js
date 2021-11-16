import React from 'react'
import { Box, Button, Flex, Progress, Stack } from '@chakra-ui/react'
import { Text } from '../../../../../../library/components/typography/typography'
import { AiFillStar } from 'react-icons/ai'
import { colors } from '../../../../../../library/constants/styles'
import { BiCommentDetail } from 'react-icons/all'
import RatingList from './ratingList'
import ReviewsList from './reviewsList'

const CampReviews = () => {
  const ratings = [
    { stars: 5, value: 80 },
    { stars: 4, value: 10 },
    { stars: 3, value: 5 },
    { stars: 2, value: 3 },
    { stars: 1, value: 2 },
  ]

  return (
    <div>
      <Flex justify={'space-between'} align={'flex-start'} mb={16}>
        <Flex align={'center'}>
          <AiFillStar fontSize={'6rem'} color={colors.primary} />
          <Box ml={6}>
            <Text
              align={'center'}
              weight={700}
              size={'4rem'}
              lineHeight={1}
              mb={'0.8rem'}
            >
              4.53
            </Text>
            <Text align={'center'} size={'1.4rem'}>
              125 reviews
            </Text>
          </Box>
        </Flex>
        <RatingList ratings={ratings} />
      </Flex>
      <Button size={'m'} variant={'action'} isFullWidth mb={24}>
        <Flex align={'center'}>
          <BiCommentDetail />
          <span className={'ml-5'}>Write a Review</span>
        </Flex>
      </Button>
      <ReviewsList />
    </div>
  )
}

export default CampReviews
