import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { colors } from '../../constants/styles'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const DayButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isSelected ? colors.primary : 'transparent'};
  padding: 0.8rem;
  border-radius: 3.6rem;
  border: 1px solid
    ${(props) => (props.isSelected ? colors.primary : colors.text50)};
  font-size: 1.2rem;
  color: ${(props) => (props.isSelected ? '#fff' : colors.text50)};
  line-height: 2rem;
  font-weight: 600;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`

interface Props {
  onChange: (arg1: string[]) => void
  values: string[]
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const WeekDayPicker: React.FC<Props> = ({ onChange, values }) => {
  const [selectedDays, setSelectedDays] = useState<string[]>(values || [])

  const handleChange = (day: string) => {
    setSelectedDays((prevState) => {
      if (!prevState.includes(day)) {
        return [...prevState, day]
      }

      return prevState.filter((d) => d !== day)
    })
  }

  useEffect(() => {
    onChange(selectedDays)
  }, [selectedDays])

  return (
    <Container>
      {days.map((day) => (
        <DayButton
          type={'button'}
          key={day}
          isSelected={selectedDays.includes(day)}
          onClick={() => handleChange(day)}
        >
          {day}
        </DayButton>
      ))}
    </Container>
  )
}

export default WeekDayPicker
