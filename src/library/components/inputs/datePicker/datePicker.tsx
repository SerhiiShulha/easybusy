import React, { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css'
import './datePicker.scss'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { DateRangePicker } from 'react-date-range'
import { addDays, addYears, intervalToDuration } from 'date-fns'
import styled from '@emotion/styled'
import { colors } from '../../../constants/styles' // theme css file

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const DatePicker: React.FC<Props> = ({ isOpen, onClose }) => {
  const [state, setState] = useState<any[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  const chosenDaysCount = intervalToDuration({
    start: state[0].startDate,
    end: state[0].endDate,
  }).days

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'md'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <h3>Advanced Search</h3>
          <h4>{chosenDaysCount}</h4>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <DateRangePicker
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              inputRanges={[]}
              staticRanges={[]}
              minDate={new Date()}
              maxDate={addYears(new Date(), 2)}
              color={colors.primary}
              rangeColors={[colors.primary]}
            />
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default DatePicker
