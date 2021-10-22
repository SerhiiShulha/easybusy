import React from 'react'
import styled from '@emotion/styled'
import Button from '../inputs/buttons/Button'
import { FiSliders } from 'react-icons/all'
import locationIcon from '../../../assets/images/icons/location.svg'
import inIcon from '../../../assets/images/icons/in.svg'
import outIcon from '../../../assets/images/icons/out.svg'
import dollarIcon from '../../../assets/images/icons/dollar.svg'
import { colors } from '../../constants/styles'

const Container = styled.div<{ compact: boolean }>`
  display: flex;
  align-items: center;
  padding: 2.5rem 2.5rem 2.5rem 3.5rem;
  margin-bottom: 3rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 32px 96px -36px rgba(26, 34, 50, 0.1);
  border-radius: 12px;
`

const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
`

const FilterBlock = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  padding-right: 3rem;

  &:first-of-type {
    flex: 2;
  }

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
`

const FilterTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`

const FilterIcon = styled.img`
  margin-right: 10px;
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

interface Props {
  compact?: boolean
}

const InlineSearchForm: React.FC<Props> = ({ compact = false }) => {
  return (
    <>
      <Container compact={compact}>
        <FiltersContainer>
          <FilterBlock>
            <FilterIcon src={locationIcon} title={'Location'} />
            <div>
              <FilterTitle>Location</FilterTitle>
            </div>
          </FilterBlock>
          <FilterBlock>
            <FilterIcon src={inIcon} title={'From'} />
            <div>
              <FilterTitle>Start</FilterTitle>
            </div>
          </FilterBlock>
          <FilterBlock>
            <FilterIcon src={outIcon} title={'To'} />
            <div>
              <FilterTitle>End</FilterTitle>
            </div>
          </FilterBlock>
          <FilterBlock>
            <FilterIcon src={dollarIcon} title={'Price'} />
            <div>
              <FilterTitle>Max Price</FilterTitle>
            </div>
          </FilterBlock>
        </FiltersContainer>
        <Button onClick={() => console.log('fsdf')}>Search</Button>
      </Container>
      {!compact && (
        <div className={'flex justify-end pr-10'}>
          <AdvancedSearchBtn onClick={() => console.log('vcbcxvbxcvb')}>
            <span>Advanced Search </span> <FiSliders />
          </AdvancedSearchBtn>
        </div>
      )}
    </>
  )
}

export default InlineSearchForm
