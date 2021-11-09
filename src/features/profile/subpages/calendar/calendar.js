import React from 'react'
import {
  SettingsPageTitle,
  Text,
} from '../../../../library/components/typography/typography'
import { Box, Button, Flex } from '@chakra-ui/react'
import { IoCalendarNumberOutline } from 'react-icons/all'
import { colors } from '../../../../library/constants/styles'
import OrganizerEvent from '../../../../library/components/layout/listItems/calendarEvents/organizerEvent'

const DayTitle = () => {
  return (
    <Flex alignItems={'center'} mb={12}>
      <IoCalendarNumberOutline
        className={'mr-8'}
        fontSize={'2rem'}
        color={colors.primary}
      />
      <Text size={'2rem'} weight={800}>
        10 Aug. 2021
      </Text>
    </Flex>
  )
}

const Calendar = () => {
  return (
    <>
      <Flex
        width={'full'}
        alignItems={'center'}
        justifyContent={'space-between'}
        className={'mb-24'}
      >
        <SettingsPageTitle>Calendar</SettingsPageTitle>
        <Button
          variant={'action'}
          size={'m'}
          onClick={() => alert('new event')}
        >
          + Schedule New Event
        </Button>
      </Flex>
      <Box mb={36}>
        <DayTitle />
        <OrganizerEvent />
        <OrganizerEvent />
      </Box>
      <Box mb={36}>
        <DayTitle />
        <OrganizerEvent />
        <OrganizerEvent />
      </Box>
    </>
  )
}

export default Calendar
