import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { colors, mq } from '../../constants/styles'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${mq.md} {
    align-items: center;
    flex-wrap: nowrap;
  }
`

const DayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  margin-bottom: 1rem;
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
    margin-right: 0.5rem;

    ${mq.md} {
      margin-right: 1.5rem;
    }
  }

  ${mq.md} {
    flex: 1;
    width: auto;
    margin-bottom: 0;
  }
`

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const WeekDayPicker = ({ onChange, values }) => {
  const [selectedDays, setSelectedDays] = useState(values || [])

  const handleChange = (day) => {
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
