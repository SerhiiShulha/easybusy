import styled from '@emotion/styled'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { colors, mq } from '../../../../constants/styles'
import { Hidden, Visible } from 'react-grid-system'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const ImageContainer = styled.div`
  margin-bottom: 1.5rem;

  ${mq.xs} {
    margin-bottom: 1.2rem;
  }
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;

  ${mq.xs} {
    height: 20rem;
  }
`

const Name = styled.span`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;

  ${mq.xs} {
    font-size: 1.4rem;
  }
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  line-height: 2.4rem;

  ${mq.xs} {
    font-size: 1.2rem;
  }

  svg {
    margin-right: 0.5rem;
    font-size: 2.4rem;
    color: ${colors.primary};

    ${mq.xs} {
      font-size: 1.6rem;
    }
  }
`

const Description = styled.span`
  color: ${colors.text50};

  ${mq.xs} {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
`

interface Props {
  camp?: any
}

const CampCard: React.FC<Props> = ({ camp }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={'https://placeimg.com/640/480/arch'} title={'Camp name'} />
      </ImageContainer>
      <div className="flex justify-between items-center mb-2">
        <Name>Friends Summer Camp</Name>
        <Hidden xs>
          <Rating>
            <AiFillStar />
            <span>4.54</span>
          </Rating>
        </Hidden>
      </div>
      <Description>Mont-Tremblant, Qc</Description>
      <Visible xs>
        <Rating>
          <AiFillStar />
          <span>4.54</span>
        </Rating>
      </Visible>
    </Container>
  )
}

export default CampCard
