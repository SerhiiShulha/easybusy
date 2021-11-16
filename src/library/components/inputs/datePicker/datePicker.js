import React, { useState } from 'react'
import './datePicker.scss'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { DateRange, OnDateRangeChangeProps } from 'react-date-range'
import { addDays, addYears, intervalToDuration } from 'date-fns'
import styled from '@emotion/styled'
import { colors } from '../../../constants/styles'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Subtitle = styled.h3`
  margin-bottom: 4rem;
  font-weight: 800;
  font-size: 2.5rem;
`

const DaysCount = styled.span`
  color: ${colors.text80};
  font-size: 1.4rem;
`

const DatePicker = ({
  isOpen,
  startDate = null,
  endDate = new Date(''),
  onClose,
  type,
  onSubmit,
}) => {
  const [state, setState] = useState([
    {
      startDate,
      endDate,
      key: 'selection',
    },
  ])
  const [initialRender, setInitialRender] = useState(true)

  // const chosenDaysCount = intervalToDuration({
  //   start: state[0].startDate,
  //   end: state[0].endDate,
  // }).days

  console.log(state)

  const handleChange = (ranges) => {
    console.log(ranges)

    // if (type === 'end' && initialRender) {
    //   setInitialRender(false)
    //   return setState([
    //     {
    //       startDate: ranges.selection.startDate,
    //       endDate: ranges.selection.startDate,
    //       ...ranges.selection,
    //     },
    //   ])
    // }

    setState([ranges.selection])

    setInitialRender(false)
  }

  const handleSubmit = () => {
    onSubmit({ startDate: state[0].startDate, endDate: state[0].endDate })
    onClose()
  }

  // const direction = useBreakpointValue({ base: 'vertical', md: 'horizontal' })

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'lg'} variant={'datepicker'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <h3>Dates</h3>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <Subtitle>Select start and end dates</Subtitle>
            <DateRange
              onChange={handleChange}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              retainEndDateOnFirstSelection={false}
              months={2}
              ranges={state}
              // direction={direction}
              direction={'horizontal'}
              minDate={new Date()}
              maxDate={addYears(new Date(), 10)}
              color={'#e6e6e6'}
              rangeColors={['#e6e6e6']}
              // fixedHeight
              showMonthAndYearPickers={false}
              showDateDisplay={false}
              monthDisplayFormat={'MMMM yyyy'}
            />
            {/*<DaysCount>{chosenDaysCount} days selected</DaysCount>*/}
          </Container>
        </ModalBody>
        <ModalFooter>
          <Container>
            <Button onClick={handleSubmit}>Confirm</Button>
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DatePicker
