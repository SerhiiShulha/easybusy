import { Box, Flex, Progress, Stack } from '@chakra-ui/react'
import { Text } from '../../../../../../library/components/typography/typography'
import React from 'react'

const RatingList = ({ ratings }) => {
  return (
    <Stack spacing={5}>
      {ratings.map((r) => (
        <Flex align={'center'} key={r.stars}>
          <Box w={5}>
            <Text align={'center'} lineHeight={1}>
              {r.stars}
            </Text>
          </Box>

          <Progress
            colorScheme="primary"
            height={4}
            width={'36rem'}
            value={r.value}
            borderRadius={'5px'}
            ml={6}
          />
        </Flex>
      ))}
    </Stack>
  )
}

export default RatingList
