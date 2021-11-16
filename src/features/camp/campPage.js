import React from 'react'
import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'react-grid-system'
import { Flex, Stack } from '@chakra-ui/react'
import { Text } from '../../library/components/typography/typography'
import {
  BiPencil,
  HiOutlinePhotograph,
  IoImageOutline,
  MdOutlineQrCode2,
} from 'react-icons/all'
import CampInfo from './components/campInfo/campInfo'
import CampOrganizerInfo from './components/campOrganizerInfo/campOrganizerInfo'
import CampBookingBlock from './components/campBookingBlock/campBookingBlock'
import CampTabsInfo from './components/campTabsInfo/CampTabsInfo'
import { colors } from '../../library/constants/styles'

const PageHeader = styled.div`
  width: 100%;
  height: 40rem;
  background-image: url('https://placeimg.com/1000/480/nature');
  background-size: cover;
`

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0.5rem 2.7rem;
  background-color: #fff;
  border-radius: 6px;
  transition: 0.3s all;

  &:hover {
    color: ${colors.primary};
  }

  svg {
    margin-right: 1rem;
  }
`

const CampDataContainer = styled.div`
  transform: translateY(-9rem);
`

const CampPage = () => {
  const location = useLocation()
  console.log(location)
  return (
    <main className={'mb-24'}>
      <PageHeader>
        <Container>
          <Row>
            <Col>
              <Flex justify={'flex-end'} mt={8}>
                <Stack spacing={4}>
                  <HeaderButton>
                    <BiPencil fontSize={24} />
                    <Text size={'1.4rem'}>Edit Camp Details</Text>
                  </HeaderButton>
                  <HeaderButton>
                    <HiOutlinePhotograph fontSize={24} />
                    <Text size={'1.4rem'}>Edit Cover Photo</Text>
                  </HeaderButton>
                  <HeaderButton>
                    <MdOutlineQrCode2 fontSize={24} />
                    <Text size={'1.4rem'}>Scan QR-code</Text>
                  </HeaderButton>
                </Stack>
              </Flex>
            </Col>
          </Row>
        </Container>
      </PageHeader>
      <CampDataContainer>
        <Container>
          <CampInfo />
          <Row>
            <Col md={5}>
              <CampBookingBlock />
            </Col>
            <Col md={7}>
              <CampOrganizerInfo />
              <CampTabsInfo />
            </Col>
          </Row>
        </Container>
      </CampDataContainer>
    </main>
  )
}

export default CampPage
