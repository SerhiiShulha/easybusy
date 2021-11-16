import React from 'react'
import { Box } from '../ui/campUiComponents'
import { colors } from '../../../../library/constants/styles'
import { Text } from '../../../../library/components/typography/typography'
import styled from '@emotion/styled'
import { Button, Flex, Stack, Wrap } from '@chakra-ui/react'
import { UserAvatar } from '../../../../library/components/layout/ui/profileNavDropdown/profileNavDropdown'
import phoneIcon from '../../../../assets/images/icons/phone.svg'
import emailIcon from '../../../../assets/images/icons/email.svg'

const Photo = styled.img`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`

const CampOrganizerInfo = () => {
  return (
    <Box p={'3rem 3rem 5.5rem'} m={'0 0 6rem'}>
      <Text size={'1.4rem'} color={colors.text80} mb={'1.5rem'}>
        Organizer Info
      </Text>
      <Flex mb={20}>
        <Flex flex={1} align={'flex-start'}>
          <Flex align={'center'}>
            <UserAvatar size={'5.4rem'} userPhoto={null} mr={'1.5rem'} />
            <Text lineHeight={'3rem'} size={'2.5rem'} weight={600}>
              Steve Williams
            </Text>
          </Flex>
        </Flex>
        <Flex flex={1} direction={'column'} pl={6}>
          <Flex align={'center'} mb={6}>
            <img src={phoneIcon} alt={'Location'} className={'mr-6'} />
            <span>514-941-7878</span>
          </Flex>
          <Flex align={'center'} mb={6}>
            <img src={phoneIcon} alt={'Location'} className={'mr-6'} />
            <span>514-941-7878</span>
          </Flex>
          <Flex align={'center'}>
            <img src={emailIcon} alt={'Location'} className={'mr-8'} />
            <span>stevewilliams29@gmail.com</span>
          </Flex>
        </Flex>
      </Flex>
      <Stack direction={'row'} spacing={6}>
        <Flex flex={1}>
          <Button isFullWidth>Send a Message</Button>
        </Flex>
        <Flex flex={1}>
          <Button variant={'action'} isFullWidth>
            Show Bookings
          </Button>
        </Flex>
      </Stack>
    </Box>
  )
}

export default CampOrganizerInfo
