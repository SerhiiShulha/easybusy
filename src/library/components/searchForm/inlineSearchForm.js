import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FiSliders } from 'react-icons/all'
import locationIcon from '../../../assets/images/icons/location.svg'
import inIcon from '../../../assets/images/icons/in.svg'
import outIcon from '../../../assets/images/icons/out.svg'
import dollarIcon from '../../../assets/images/icons/dollar.svg'
import { colors, mq } from '../../constants/styles'
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  NumberInput,
  NumberInputField,
  useBreakpoint,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'
import AdvancedSearchModal from './advancedSearchModal'
import DatePicker from '../inputs/datePicker/datePicker'
import { format, isValid } from 'date-fns'
import { useHistory } from 'react-router-dom'
import { Visible } from 'react-grid-system'
import { css } from '@emotion/css'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.lg} {
    align-items: center;
    flex-direction: row;
    padding: 2.5rem 2.5rem 2.5rem 3.5rem;
    margin-bottom: 3rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 32px 96px -36px rgba(26, 34, 50, 0.1);
    border-radius: 12px;
  }
`

const FiltersContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 5.6rem);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1rem;

  ${mq.md} {
    margin-bottom: 3rem;
  }

  ${mq.lg} {
    flex: 1;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, max-content);
    grid-gap: 0;
    margin-bottom: 0;
  }

  // ${mq.xl} {
  //   grid-template-columns: 2fr repeat(3, max-content);
  // }
`

const FilterBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
  font-size: 1.4rem;
  background-color: #fff;
  border-radius: 6px;

  &:first-of-type {
    grid-column: 1 / 3;

    ${mq.lg} {
      grid-column: auto;
    }
  }

  &:last-of-type {
    grid-column-start: 1;
    grid-column-end: 3;

    ${mq.lg} {
      grid-column: auto;
    }
  }

  ${mq.lg} {
    background-color: transparent;
    border-radius: 0;
    padding: 0 2.5rem 0 0;

    &:not(:first-of-type) {
      padding-left: 3rem;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 3.2rem;
        width: 1px;
        background-color: #dde4f2;
      }
    }
  }
`

const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;

  ${mq.xs} {
    font-size: 1.2rem;
    line-height: 1;
  }
`

const FilterIcon = styled.img`
  margin-right: 10px;

  ${mq.xs} {
    max-width: 18px;
  }
`

const AdvancedSearchBtn = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  transition: 0.3s all;

  &:hover {
    color: ${colors.accent};
  }

  span {
    margin-right: 10px;
  }

  svg {
    font-size: 24px;
  }
`

const FilterValue = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
  color: ${(props) => (!props.isFilled ? colors.text60 : colors.text)};
  width: 100%;
`

const InlineSearchForm = ({ compact = false }) => {
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [location, setLocation] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const startPickerState = useDisclosure()
  const [startDate, setStartDate] = useState(null)
  const endPickerState = useDisclosure()
  const [endDate, setEndDate] = useState(new Date(''))

  const handleDatesChange = (dates) => {
    setStartDate(dates.startDate)
    setEndDate(dates.endDate)
  }

  const onSubmit = () => {
    history.push('/search', { location, startDate, endDate, maxPrice })
  }

  const [isSmallScreen, isMediumScreen] = useMediaQuery([
    '(max-width: 767px)',
    '(min-width: 768px) and (max-width: 1199px)',
  ])

  return (
    <>
      <Container compact={compact}>
        <FiltersContainer>
          <FilterBlock>
            <FilterIcon src={locationIcon} title={'Location'} />
            <div className={'flex-1'}>
              <FilterTitle>Location</FilterTitle>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={'Enter city, state or ZIP code'}
                size={'inline'}
                variant={'unstyled'}
              />
            </div>
          </FilterBlock>
          <FilterBlock>
            <FilterIcon src={inIcon} title={'From'} />
            <div>
              <FilterTitle>Start</FilterTitle>
              <FilterValue
                isFilled={!!startDate && isValid(startDate)}
                onClick={startPickerState.onOpen}
              >
                {!!startDate && isValid(startDate)
                  ? format(startDate, 'd MMM, yyyy')
                  : isSmallScreen || isMediumScreen
                  ? 'Date'
                  : 'Enter the date'}
              </FilterValue>
            </div>
          </FilterBlock>
          <FilterBlock>
            <FilterIcon src={outIcon} title={'To'} />
            <div>
              <FilterTitle>End</FilterTitle>
              <FilterValue
                isFilled={!!endDate && isValid(endDate)}
                onClick={endPickerState.onOpen}
              >
                {!!endDate && isValid(endDate)
                  ? format(endDate, 'd MMM, yyyy')
                  : isSmallScreen || isMediumScreen
                  ? 'Date'
                  : 'Enter the date'}
              </FilterValue>
            </div>
          </FilterBlock>
          <FilterBlock>
            <FilterIcon src={dollarIcon} title={'Price'} />
            <div>
              <FilterTitle>Max Price</FilterTitle>
              <NumberInput
                value={maxPrice}
                min={0}
                max={999999}
                onChange={setMaxPrice}
                variant={'unstyled'}
                size={'inline'}
              >
                <NumberInputField placeholder={'Enter the number'} />
              </NumberInput>
            </div>
          </FilterBlock>
        </FiltersContainer>
        <Button
          size={'m'}
          onClick={onSubmit}
          width={isSmallScreen ? 'full' : '140px'}
          className={'md:self-center'}
        >
          Search
        </Button>
      </Container>
      {!compact && (
        <div
          className={
            'flex justify-center lg:justify-end mt-16 md:mt-12 lg:mt-0 lg:pr-10'
          }
        >
          <AdvancedSearchBtn onClick={onOpen}>
            <span>Advanced Search </span> <FiSliders />
          </AdvancedSearchBtn>
        </div>
      )}
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
      {isOpen && <AdvancedSearchModal isOpen={isOpen} onClose={onClose} />}
    </>
  )
}

export default InlineSearchForm
