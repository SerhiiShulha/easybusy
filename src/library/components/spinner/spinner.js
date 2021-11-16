import React from 'react'
import { CircularProgress, Flex } from '@chakra-ui/react'
import { colors } from '../../constants/styles'

const Spinner = () => (
  <Flex flex={1} justify={'center'}>
    <CircularProgress isIndeterminate color={colors.primary} size={16} />
  </Flex>
)

export default Spinner
