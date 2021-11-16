import React, { useState } from 'react'
import { Box } from '../ui/campUiComponents'
import styled from '@emotion/styled'
import { Button, color, useDisclosure } from '@chakra-ui/react'
import { colors } from '../../../../library/constants/styles'
import { Text } from '../../../../library/components/typography/typography'
import inIcon from '../../../../assets/images/icons/in.svg'
import outIcon from '../../../../assets/images/icons/out.svg'
import usersIcon from '../../../../assets/images/icons/users.svg'
import userIcon from '../../../../assets/images/icons/user.svg'
import DatePicker from '../../../../library/components/inputs/datePicker/datePicker'
import { format, isValid } from 'date-fns'

const GridContainer = styled(Box)`
  display: grid;
  grid-template-rows: 8rem 8rem 23rem;
`

const GridRow = styled.div`
  display: flex;
  background-color: rgba(212, 212, 212, 0.2);

  &:first-of-type {
    border-bottom: 1px #dde4f2 solid;
    background-color: #fff;
  }
`

const Cell = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 1.5rem 2.5rem;

  &:not(:last-child) {
    border-right: 1px #dde4f2 solid;
  }
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  padding: 3rem 5rem;
  border-top: 1px solid #dde4f2;
`

const CampBookingBlock = () => {
  const startPickerState = useDisclosure()
  const [startDate, setStartDate] = useState(null)
  const endPickerState = useDisclosure()
  const [endDate, setEndDate] = useState(new Date(''))

  const handleDatesChange = (dates) => {
    setStartDate(dates.startDate)
    setEndDate(dates.endDate)
  }

  return (
    <GridContainer>
      <GridRow>
        <Cell>
          <img src={inIcon} className={'mr-4'} />
          <div>
            <Text size={'1.4rem'} weight={600}>
              Start
            </Text>
            <button onClick={startPickerState.onOpen}>
              {!!startDate && isValid(startDate) ? (
                <span>{format(startDate, 'd MMM, yyyy')}</span>
              ) : (
                <Text as={'span'} color={colors.text50}>
                  Pick the date
                </Text>
              )}
            </button>
          </div>
        </Cell>
        <Cell>
          <img src={outIcon} className={'mr-4'} />
          <div>
            <Text size={'1.4rem'} weight={600}>
              End
            </Text>
            <button onClick={endPickerState.onOpen}>
              {!!endDate && isValid(endDate) ? (
                <span>{format(endDate, 'd MMM, yyyy')}</span>
              ) : (
                <Text as={'span'} color={colors.text50}>
                  Pick the date
                </Text>
              )}
            </button>
          </div>
        </Cell>
      </GridRow>
      <GridRow>
        <Cell>
          <img src={usersIcon} className={'mr-4'} />
          <div>
            <Text size={'1.4rem'} weight={600}>
              Camp capacity
            </Text>
            <div>
              <span>120 </span>
              <Text as={'span'} color={colors.text50}>
                children
              </Text>
            </div>
          </div>
        </Cell>
        <Cell>
          <img src={userIcon} className={'mr-4'} />
          <div>
            <Text size={'1.4rem'} weight={600}>
              Vacant seats
            </Text>
            <div>
              <span>54 </span>
              <Text as={'span'} color={colors.text50}>
                seats
              </Text>
            </div>
          </div>
        </Cell>
      </GridRow>
      <Footer>
        <Text weight={700} size={'3rem'} lineHeight={'3.6rem'} mb={'1rem'}>
          $210/day
        </Text>
        <Text color={colors.text60} lineHeight={'2rem'} mb={'2rem'}>
          Total: 10 days, $2100
        </Text>
        <Button isFullWidth>Book Now</Button>
      </Footer>

      {startPickerState.isOpen && (
        <DatePicker
          isOpen={startPickerState.isOpen}
          onClose={startPickerState.onClose}
          startDate={startDate}
          endDate={endDate}
          type={'start'}
          onSubmit={handleDatesChange}
        />
      )}
      {endPickerState.isOpen && (
        <DatePicker
          isOpen={endPickerState.isOpen}
          onClose={endPickerState.onClose}
          startDate={startDate}
          endDate={endDate}
          type={'end'}
          onSubmit={handleDatesChange}
        />
      )}
    </GridContainer>
  )
}

export default CampBookingBlock
