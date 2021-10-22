import styled from '@emotion/styled'
import React from 'react'
import { Col, Container, Row } from 'react-grid-system'
import teamPhoto from '../../../../assets/images/pages/home/team.png'
import { mq } from '../../../../library/constants/styles'
import { Button } from '@chakra-ui/react'

const StyledContainer = styled(Container)`
  padding-bottom: 10rem;
  padding-top: 10rem;

  ${mq.xs} {
    padding-bottom: 0;
    padding-top: 0;
    background-image: url(${teamPhoto});
    background-size: cover;
    background-position: center;
  }
`

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 8rem;
  border-radius: 4rem;
  background-image: url(${teamPhoto});
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;

  ${mq.xs} {
    padding-top: 8.5rem;
    padding-bottom: 8.5rem;
    background: none;
  }
`

const Title = styled.h3`
  margin-bottom: 2.5rem;
  font-size: 4rem;
  font-weight: 800;

  ${mq.xs} {
    font-size: 2.5rem;
  }
`

const Message = styled.p`
  line-height: 2.5rem;
  margin-bottom: 2.5rem;

  ${mq.xs} {
    font-size: 1.4rem;
  }
`

const OrganizerSection: React.FC = () => {
  return (
    <StyledContainer component={'section'}>
      <Row>
        <Col md={10} offset={{ md: 1 }}>
          <Banner>
            <Title>Become an Organizer</Title>
            <Message>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </Message>
            <Button size={'m'} onClick={() => console.log('sdfsdf')}>
              Join Now
            </Button>
          </Banner>
        </Col>
      </Row>
    </StyledContainer>
  )
}

export default OrganizerSection
